# Chat Widget Quick Start

Get your WhatsApp-style consultation booking system running in 5 minutes.

## ⚡ Quick Setup

### 1. Install Dependencies
```bash
npm install framer-motion lucide-react
```

### 2. Add Environment Variables
Create a `.env.local` file:
```env
VITE_WEB3FORMS_KEY=your_key
VITE_GOOGLE_APPS_SCRIPT_URL=your_url
```

### 3. Add to Your App
In `App.jsx`:
```jsx
import ChatWidget from './components/chat/ChatWidget';

export default function App() {
  return (
    <>
      {/* Your app content */}
      <ChatWidget />
    </>
  );
}
```

### 4. Set Up Google Sheets
1. Go to [Google Sheets](https://sheets.google.com)
2. Create new sheet with headers: `Timestamp, Service, Name, Email, Date, Time Slot, Notes`
3. Go to [Google Apps Script](https://script.google.com)
4. Paste code from `google-apps-script.js`
5. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your sheet ID
6. Deploy as web app
7. Copy deployment URL to `.env`

### 5. Set Up Web3Forms
1. Go to [Web3Forms](https://web3forms.com)
2. Sign up and verify email
3. Copy API key to `.env`

## ✅ Done!

Your booking widget is now live. Click the purple floating button to test!

---

## 🎨 Customization

### Change Colors
In `src/components/chat/ChatWidget.jsx` and other components, replace purple classes:
- `purple-600` → your primary color
- `purple-700` → darker shade
- `purple-50` → light shade

### Add More Services
Edit `src/data/consultationOptions.js`:
```javascript
{
  id: 'new-service',
  label: 'Your Service',
  icon: '🚀',
  description: 'Service description'
}
```

### Change Time Slots
Edit `src/data/timeSlots.js`:
```javascript
export const timeSlots = {
  monday: [
    { time: '10:00 AM', id: 'mon-1000' },
    // Add your slots
  ],
  // Add more days
};
```

---

## 🐛 Troubleshooting

**Emails not sending?**
- Check Web3Forms API key in `.env`
- Verify email is confirmed in Web3Forms

**Bookings not saving?**
- Check Google Apps Script deployment URL
- Verify sheet name is `Bookings`
- Check Google Apps Script logs for errors

**Chat widget not appearing?**
- Import and add `<ChatWidget />` to your main component
- Check browser console for errors
- Verify Framer Motion is installed

---

## 📚 Full Documentation

See `CHAT_WIDGET_SETUP.md` for complete setup instructions.

---

## 🚀 Features

- ✨ Beautiful animations with Framer Motion
- 📱 Mobile-first responsive design
- 🎯 Smooth conversation flow
- 📅 Smart date picker (available days only)
- ⏰ Time slot selection with double-booking prevention
- 📧 Email notifications via Web3Forms
- 📊 Auto-save to Google Sheets
- ♿ Accessible keyboard navigation
- 🎨 Customizable colors and services

Enjoy! 🎉
