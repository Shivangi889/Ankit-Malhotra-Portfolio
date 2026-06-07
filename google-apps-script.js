/**
 * Google Apps Script for Consultation Booking System
 * Deploy this as a web app to store bookings in Google Sheets
 * and create calendar invites for booked slots.
 * 
 * Setup Instructions:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this entire code
 * 4. Create a Google Sheet with columns: Timestamp, Service, Name, Email, Date, Time Slot, Notes
 * 5. Share the sheet with the service account email (found in Apps Script settings)
 * 6. Deploy as web app (Execute as you, Anyone can access)
 * 7. Copy the deployment URL and add to .env as VITE_GOOGLE_APPS_SCRIPT_URL
 */

// Replace with your Google Sheet ID (found in the URL)
const SHEET_ID = 'AKfycbyt86nRc7gc4oO4KkLS6iPx1gHWaKTKNlvi9_MaQGvZ4Lzxa7UqRbHrlghyLcS1i8Im';

// Sheet name where bookings are stored
const SHEET_NAME = 'Bookings';

// Organizer email for booking notifications and calendar event creation.
const ORGANIZER_EMAIL = 'testing.synergy09@gmail.com';

// Length of each booking event in minutes.
const EVENT_DURATION_MINUTES = 30;

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = e.parameter.action;

    if (action === 'checkBooking') {
      return checkBookingSlot(e.parameter.date, e.parameter.timeSlot);
    }

    if (action === 'getBookings') {
      return getBookingsForDate(e.parameter.date);
    }

    // Save booking, create calendar event, and notify both parties.
    return saveBooking(data);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const action = e.parameter.action;

    if (action === 'checkBooking') {
      return checkBookingSlot(e.parameter.date, e.parameter.timeSlot);
    }

    if (action === 'getBookings') {
      return getBookingsForDate(e.parameter.date);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: 'Invalid action' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function saveBooking(data) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: 'Sheet not found' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Append new row
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.service || '',
      data.name || '',
      data.email || '',
      data.date || '',
      data.timeSlot || '',
      data.notes || ''
    ]);

    try {
      createCalendarEvent(data);
      sendBookingNotificationEmails(data);
    } catch (calendarError) {
      Logger.log('Calendar / email notification error: ' + calendarError);
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: calendarError.toString() })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Booking saved' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function createCalendarEvent(data) {
  const calendar = (ORGANIZER_EMAIL && ORGANIZER_EMAIL !== '')
    ? CalendarApp.getCalendarById(ORGANIZER_EMAIL) || CalendarApp.getDefaultCalendar()
    : CalendarApp.getDefaultCalendar();
  const eventTimes = getEventTimes(data.date, data.timeSlot);

  if (!eventTimes) {
    throw new Error('Unable to parse event time from booking data');
  }

  const eventTitle = `${data.service || 'Consultation'} with ${data.name || 'Client'}`;
  const eventDescription = `Client: ${data.name || 'Unknown'}\nEmail: ${data.email || 'Unknown'}\nDate: ${data.date || ''}\nTime: ${data.timeSlot || ''}\n\nNotes:\n${data.notes || 'No additional notes'}`;

  calendar.createEvent(eventTitle, eventTimes.start, eventTimes.end, {
    description: eventDescription,
    guests: data.email || '',
    sendInvites: true
  });
}

function sendBookingNotificationEmails(data) {
  const subject = `Consultation booked: ${data.service || 'Consultation'} on ${data.date} at ${data.timeSlot}`;
  const body = `Hello,

A new booking has been confirmed.

Service: ${data.service || 'Consultation'}
Name: ${data.name || 'Unknown'}
Email: ${data.email || 'Unknown'}
Date: ${data.date || ''}
Time Slot: ${data.timeSlot || ''}

Notes:
${data.notes || 'No additional notes'}

This event has been added to the organizer's Google Calendar and an invite has been sent to the client.
`;

  const recipients = [data.email, ORGANIZER_EMAIL].filter(Boolean).join(',');

  MailApp.sendEmail({
    to: recipients,
    subject: subject,
    body: body
  });
}

function getEventTimes(date, timeSlot) {
  if (!date || !timeSlot) {
    return null;
  }

  const [time, period] = timeSlot.trim().split(' ');
  const [hourString, minuteString] = time.split(':');
  let hour = parseInt(hourString, 10);
  const minute = parseInt(minuteString, 10);

  if (period.toUpperCase() === 'PM' && hour !== 12) {
    hour += 12;
  }

  if (period.toUpperCase() === 'AM' && hour === 12) {
    hour = 0;
  }

  const start = new Date(`${date}T${pad(hour)}:${pad(minute)}:00`);
  const end = new Date(start.getTime() + EVENT_DURATION_MINUTES * 60000);

  return { start, end };
}

function pad(value) {
  return value.toString().padStart(2, '0');
}

function checkBookingSlot(date, timeSlot) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ isBooked: false })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const data = sheet.getDataRange().getValues();

    // Check if booking exists (skip header row)
    for (let i = 1; i < data.length; i++) {
      const bookingDate = data[i][4]; // Date column
      const bookingTime = data[i][5]; // Time Slot column

      if (bookingDate === date && bookingTime === timeSlot) {
        return ContentService.createTextOutput(
          JSON.stringify({ isBooked: true })
        ).setMimeType(ContentService.MimeType.JSON);
      }
    }

    return ContentService.createTextOutput(
      JSON.stringify({ isBooked: false })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Error checking booking: ' + error);
    return ContentService.createTextOutput(
      JSON.stringify({ isBooked: false })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function getBookingsForDate(date) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ bookings: [] })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const data = sheet.getDataRange().getValues();
    const bookings = [];

    // Extract all booked slots for the date (skip header row)
    for (let i = 1; i < data.length; i++) {
      const bookingDate = data[i][4]; // Date column
      const bookingTime = data[i][5]; // Time Slot column

      if (bookingDate === date) {
        bookings.push(bookingTime);
      }
    }

    return ContentService.createTextOutput(
      JSON.stringify({ bookings: bookings })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Error getting bookings: ' + error);
    return ContentService.createTextOutput(
      JSON.stringify({ bookings: [] })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
