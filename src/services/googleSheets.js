/**
 * Google Sheets Service
 * Stores consultation bookings in Google Sheets via Google Apps Script
 * Deploy Google Apps Script and get the deployment URL
 */

const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

/**
 * Save booking to Google Sheets
 * @param {Object} bookingData - Booking information
 * @returns {Promise<Object>} - Result of the operation
 */
export const saveBookingToSheets = async (bookingData) => {
  if (!GOOGLE_APPS_SCRIPT_URL) {
    console.warn('Google Apps Script URL not configured');
    return { success: false, error: 'Google Sheets service not configured' };
  }

  try {
    const payload = {
      timestamp: new Date().toISOString(),
      service: bookingData.service,
      name: bookingData.name,
      email: bookingData.email,
      date: bookingData.date,
      timeSlot: bookingData.timeSlot,
      notes: bookingData.notes || ''
    };

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, message: 'Booking saved to Google Sheets' };
    } else {
      return { success: false, error: result.error || 'Failed to save booking' };
    }
  } catch (error) {
    console.error('Google Sheets error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Check if a time slot is already booked
 * @param {string} date - Selected date (YYYY-MM-DD)
 * @param {string} timeSlot - Selected time slot
 * @returns {Promise<boolean>} - true if slot is booked, false otherwise
 */
export const isSlotBooked = async (date, timeSlot) => {
  if (!GOOGLE_APPS_SCRIPT_URL) {
    console.warn('Google Apps Script URL not configured');
    return false;
  }

  try {
    const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=checkBooking&date=${date}&timeSlot=${encodeURIComponent(timeSlot)}`, {
      method: 'GET'
    });

    const result = await response.json();
    return result.isBooked || false;
  } catch (error) {
    console.error('Booking check error:', error);
    return false;
  }
};

/**
 * Get all bookings for a specific date
 * @param {string} date - Date to check (YYYY-MM-DD)
 * @returns {Promise<Array>} - Array of booked time slots
 */
export const getBookedSlotsForDate = async (date) => {
  if (!GOOGLE_APPS_SCRIPT_URL) {
    console.warn('Google Apps Script URL not configured');
    return [];
  }

  try {
    const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=getBookings&date=${date}`, {
      method: 'GET'
    });

    const result = await response.json();
    return result.bookings || [];
  } catch (error) {
    console.error('Get bookings error:', error);
    return [];
  }
};
