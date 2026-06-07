# WhatsApp-Style Consultation Booking System - Setup Guide

## Overview
A modern, conversational consultation booking system for your portfolio with WhatsApp-style chat interface, integrated with Google Sheets and Web3Forms.

---

## Installation

### 1. Install Dependencies

```bash
npm install framer-motion lucide-react
```

Make sure you already have React and Tailwind CSS configured in your project.

---

## Environment Variables Setup

Create a `.env` file in your project root (or `.env.local` for development):

```env
# Web3Forms API Key (for email notifications)
# Get it from: https://web3forms.com
VITE_WEB3FORMS_KEY=your_web3forms_key_here

# Google Apps Script URL (for storing bookings)
# Get it from Google Apps Script deployment
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/usercontent
```

---

## Google Sheets Integration Setup

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Consultation Bookings"
3. Create headers in the first row:
   - A1: `Timestamp`
   - B1: `Service`
   - C1: `Name`
   - D1: `Email`
   - E1: `Date`
   - F1: `Time Slot`
   - G1: `Notes`

4. Copy the Sheet ID from the URL (between `/d/` and `/edit`)
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
   ```

### Step 2: Deploy Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New project"
3. Replace the entire default code with the code from `google-apps-script.js`
4. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID
5. Save the project

### Step 3: Configure Service Account

1. In Apps Script, go to **Project Settings** (gear icon)
2. Copy the **Script ID**
3. Go to **Executions** tab to see any errors

### Step 4: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Select type: **Web app**
3. Execute as: **Me** (your account)
4. Who has access: **Anyone**
5. Click **Deploy**
6. Copy the deployment URL
7. Add it to your `.env` as `VITE_GOOGLE_APPS_SCRIPT_URL`

---

## Web3Forms Integration Setup

### Step 1: Get API Key

1. Go to [Web3Forms](https://web3forms.com)
2. Sign up for a free account
3. Copy your **Access Key**
4. Add it to your `.env` as `VITE_WEB3FORMS_KEY`

### Step 2: Verify Email

1. Go to Web3Forms settings
2. Verify your email address to receive notifications
3. (Optional) Set up forwarding to forward booking notifications to specific email

---

## Integration with Your App

### Add ChatWidget to Your App

Add the ChatWidget component to your main layout (e.g., `App.jsx`):

```jsx
import ChatWidget from './components/chat/ChatWidget';

function App() {
  return (
    <>
      {/* Your existing app content */}
      
      {/* Add chat widget */}
      <ChatWidget />
    </>
  );
}

export default App;
```

---

## Customization

### Change Primary Color

Edit the purple color references in components. Currently using:
- Primary: `#6503ab` (purple-600)
- Secondary: `#e1befa` (purple-100)

Change in:
- `src/components/chat/ChatWidget.jsx`
- `src/components/chat/ChatHeader.jsx`
- `src/components/chat/ChatMessage.jsx`
- And other component files

Replace `purple-600`, `purple-700`, `purple-100`, etc. with your brand colors.

### Change Consultation Services

Edit `src/data/consultationOptions.js`:

```javascript
export const consultationOptions = [
  {
    id: 'service-id',
    label: 'Service Name',
    icon: '✨',
    description: 'Description'
  },
  // Add more services
];
```

### Change Available Time Slots

Edit `src/data/timeSlots.js`:

```javascript
export const timeSlots = {
  wednesday: [
    { time: '7:00 PM', id: 'wed-1900' },
    // Add/remove slots
  ],
  // ...
};
```

### Change Available Days

Only Wednesday, Friday, and Saturday are available by default. To change this, edit `src/data/timeSlots.js`:

```javascript
export const availableDays = ['wednesday', 'friday', 'saturday'];
// Change to your preferred days
```

---

## Features

✅ WhatsApp-style floating widget
✅ Conversational booking flow
✅ Service selection
✅ Name & email validation
✅ Date picker (only available days)
✅ Time slot selection
✅ Double booking prevention
✅ Optional notes field
✅ Booking summary review
✅ Web3Forms email notifications
✅ Google Sheets storage
✅ Mobile-first responsive design
✅ Framer Motion animations
✅ Glassmorphism effects
✅ Smooth transitions
✅ Accessibility support

---

## Troubleshooting

### Emails Not Sending
- Verify Web3Forms API key is correct in `.env`
- Check Web3Forms dashboard for failed submissions
- Ensure email is verified in Web3Forms settings

### Bookings Not Saving
- Check that Google Sheets sheet name matches `SHEET_NAME` in Apps Script
- Verify Sheet ID is correct in Apps Script
- Check Apps Script deployment is still active
- Look for errors in Google Apps Script execution logs

### Date Picker Not Showing Dates
- Ensure date validation logic in `DateSelector.jsx` is working
- Check browser console for errors
- Verify `timeSlots.js` has correct day mappings

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that color classes are available in your Tailwind config
- Verify rounded-2xl and rounded-3xl are enabled in Tailwind

---

## Production Checklist

- [ ] Web3Forms API key added to `.env`
- [ ] Google Apps Script deployed as web app
- [ ] Google Apps Script URL added to `.env`
- [ ] Google Sheets shared with service account
- [ ] ChatWidget added to main App component
- [ ] All environment variables set in deployment platform
- [ ] Test booking flow end-to-end
- [ ] Verify emails are sending
- [ ] Verify bookings are saved to Google Sheets
- [ ] Test on mobile devices
- [ ] Check accessibility with keyboard navigation

---

## File Structure

```
src/
├── components/chat/
│   ├── ChatWidget.jsx          # Main widget component
│   ├── ChatHeader.jsx          # Header with avatar
│   ├── ChatMessage.jsx         # Individual message display
│   ├── ChatInput.jsx           # Text input area
│   ├── TypingIndicator.jsx     # Bot typing animation
│   ├── QuickReplies.jsx        # Quick action buttons
│   ├── DateSelector.jsx        # Calendar date picker
│   ├── TimeSlotSelector.jsx    # Time slot picker
│   └── BookingSummary.jsx      # Booking review
├── hooks/
│   └── useChatFlow.js          # Chat conversation logic
├── services/
│   ├── web3forms.js            # Email service
│   ├── googleSheets.js         # Google Sheets API
│   └── bookingValidation.js    # Input validation
└── data/
    ├── consultationOptions.js  # Service options
    └── timeSlots.js            # Available time slots
```

---

## Support

For issues with:
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide React**: https://lucide.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Web3Forms**: https://web3forms.com/
- **Google Apps Script**: https://developers.google.com/apps-script

---

## License

Use freely in your portfolio!
