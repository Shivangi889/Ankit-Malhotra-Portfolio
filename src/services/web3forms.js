/**
 * Web3Forms Service
 * Handles email notifications for consultation bookings
 * Get your API key from: https://web3forms.com
 */

const WEB3FORMS_API_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export const sendBookingEmail = async (bookingData) => {
  if (!WEB3FORMS_API_KEY) {
    console.warn('Web3Forms API key not configured');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_API_KEY,
        subject: `New Consultation Booking - ${bookingData.service}`,
        from_name: bookingData.name,
        email: bookingData.email,
        message: formatEmailMessage(bookingData),
        redirect: '',
        redirect_status: false,
        // Additional fields for tracking
        booking_service: bookingData.service,
        booking_date: bookingData.date,
        booking_time: bookingData.timeSlot,
        booking_notes: bookingData.notes || 'None'
      })
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, message: 'Email sent successfully' };
    } else {
      return { success: false, error: result.message || 'Failed to send email' };
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message };
  }
};

const formatEmailMessage = (bookingData) => {
  return `
New Consultation Booking Received

Service: ${bookingData.service}
Name: ${bookingData.name}
Email: ${bookingData.email}
Date: ${bookingData.date}
Time Slot: ${bookingData.timeSlot}

Additional Notes:
${bookingData.notes || 'None provided'}

---
This booking has been stored in Google Sheets and a confirmation will be sent to the client.
  `.trim();
};
