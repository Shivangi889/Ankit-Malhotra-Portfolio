# 🚀 Chat Widget - Deployment Checklist & Quick Reference

Use this checklist to deploy the WhatsApp-style consultation booking system.

---

## 📋 Pre-Deployment Checklist

### Phase 1: Preparation (5 min)
- [ ] Read [CHAT_WIDGET_QUICK_START.md](./CHAT_WIDGET_QUICK_START.md)
- [ ] Verify you have Node.js and npm installed
- [ ] Check your portfolio project structure
- [ ] Open your portfolio project in VS Code

### Phase 2: Dependencies (2 min)
- [ ] Run `npm install framer-motion lucide-react`
- [ ] Verify installation: `npm list framer-motion lucide-react`
- [ ] Ensure Tailwind CSS is configured in your project
- [ ] Check that React 18+ is installed

### Phase 3: Google Sheets Setup (10 min)

#### Create Google Sheet
- [ ] Go to [Google Sheets](https://sheets.google.com)
- [ ] Create new spreadsheet named "Consultation Bookings"
- [ ] Add headers in row 1:
  - [ ] A1: `Timestamp`
  - [ ] B1: `Service`
  - [ ] C1: `Name`
  - [ ] D1: `Email`
  - [ ] E1: `Date`
  - [ ] F1: `Time Slot`
  - [ ] G1: `Notes`
- [ ] Copy Sheet ID from URL (between `/d/` and `/edit`)
- [ ] Save Sheet ID somewhere (you'll need it soon)

#### Deploy Google Apps Script
- [ ] Go to [Google Apps Script](https://script.google.com)
- [ ] Create new project
- [ ] Copy entire code from `google-apps-script.js`
- [ ] Paste into Apps Script editor
- [ ] Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your Sheet ID
- [ ] **Save the project** (Ctrl+S)
- [ ] Go to **Deploy** → **New Deployment**
- [ ] Select type: **Web app**
- [ ] Execute as: **Me**
- [ ] Who has access: **Anyone**
- [ ] Click **Deploy**
- [ ] **Copy the deployment URL** (you'll need this)
- [ ] Check "Refresh sheet permissions" if asked

### Phase 4: Web3Forms Setup (5 min)

- [ ] Go to [Web3Forms](https://web3forms.com)
- [ ] Create account or sign in
- [ ] **Verify your email** (check inbox for verification link)
- [ ] Go to dashboard
- [ ] Copy your **Access Key** (looks like: `xxxxxxxxxxxxxxxx`)
- [ ] Save it somewhere safe

### Phase 5: Environment Variables (2 min)

Create `.env.local` file in your project root:

```env
VITE_WEB3FORMS_KEY=paste_your_web3forms_key_here
VITE_GOOGLE_APPS_SCRIPT_URL=paste_your_google_apps_script_url_here
```

Example:
```env
VITE_WEB3FORMS_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/d/1-abc123def456ghi789jkl/usercontent
```

- [ ] Create `.env.local` file
- [ ] Add both environment variables
- [ ] **Don't commit this file** (add to .gitignore)
- [ ] Save the file

### Phase 6: Add ChatWidget to Your App (3 min)

Open `App.jsx`:

```jsx
// Add this import at the top
import ChatWidget from './components/chat/ChatWidget';

// Add this inside your App component (before closing tag)
function App() {
  return (
    <>
      {/* Your existing content */}
      
      {/* Add this line */}
      <ChatWidget />
    </>
  );
}

export default App;
```

- [ ] Open `src/App.jsx`
- [ ] Add import for ChatWidget
- [ ] Add `<ChatWidget />` component
- [ ] Save the file

### Phase 7: Test Locally (10 min)

- [ ] Run `npm run dev` to start development server
- [ ] Visit `http://localhost:5173` (or your dev URL)
- [ ] **Look for purple floating button in bottom-right**
- [ ] Click the button
- [ ] Test the entire flow:
  - [ ] Chat drawer opens
  - [ ] Select a service
  - [ ] Enter name (test validation)
  - [ ] Enter email (test validation)
  - [ ] Select a date
  - [ ] Select a time slot
  - [ ] Add optional notes
  - [ ] Review summary
  - [ ] Click Confirm
  - [ ] See success message
- [ ] Check email (should arrive within minutes)
- [ ] Open Google Sheets and verify booking is saved
- [ ] Test on mobile (resize browser or use phone)
- [ ] Verify responsive layout works

### Phase 8: Customization (Optional - 10 min)

- [ ] **Change colors** (optional):
  - Open `src/components/chat/ChatWidget.jsx`
  - Find `purple-600` and replace with your brand color
  - Repeat in other component files
  
- [ ] **Add/remove services** (optional):
  - Edit `src/data/consultationOptions.js`
  - Add new services
  
- [ ] **Change time slots** (optional):
  - Edit `src/data/timeSlots.js`
  - Add more days or times

- [ ] **Update bot messages** (optional):
  - Edit `src/hooks/useChatFlow.js`
  - Update `addBotMessage()` calls

### Phase 9: Production Deployment (5 min)

#### For Vercel
- [ ] Push code to GitHub
- [ ] Go to [Vercel](https://vercel.com)
- [ ] Import your GitHub repository
- [ ] Set Environment Variables:
  - [ ] `VITE_WEB3FORMS_KEY` = your key
  - [ ] `VITE_GOOGLE_APPS_SCRIPT_URL` = your URL
- [ ] Click Deploy
- [ ] Wait for build to complete
- [ ] Visit your production URL

#### For Netlify
- [ ] Push code to GitHub
- [ ] Go to [Netlify](https://netlify.com)
- [ ] Create new site from Git
- [ ] Select your repository
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Set Environment Variables:
  - [ ] `VITE_WEB3FORMS_KEY` = your key
  - [ ] `VITE_GOOGLE_APPS_SCRIPT_URL` = your URL
- [ ] Click Deploy
- [ ] Wait for build to complete
- [ ] Visit your production URL

#### For Other Platforms
- [ ] Set these environment variables:
  - [ ] `VITE_WEB3FORMS_KEY`
  - [ ] `VITE_GOOGLE_APPS_SCRIPT_URL`
- [ ] Run `npm run build`
- [ ] Deploy the `dist` folder
- [ ] Test on production URL

### Phase 10: Final Testing (5 min)

- [ ] Visit your production URL
- [ ] Verify floating button appears
- [ ] Test complete booking flow
- [ ] Check email is received
- [ ] Verify booking appears in Google Sheets
- [ ] Test on multiple browsers
- [ ] Test on mobile device
- [ ] Test on tablet

---

## 🆘 Quick Troubleshooting

### Floating Button Not Showing

**Checklist:**
- [ ] Is `<ChatWidget />` added to `App.jsx`?
- [ ] Are `framer-motion` and `lucide-react` installed?
- [ ] Check browser console (F12) for errors
- [ ] Try hard refresh (Ctrl+Shift+R)
- [ ] Check z-index (should be 40+)

**Solution:** See [CHAT_WIDGET_SETUP.md](./CHAT_WIDGET_SETUP.md#troubleshooting)

### Emails Not Sending

**Checklist:**
- [ ] Is Web3Forms API key correct in `.env.local`?
- [ ] Did you verify email in Web3Forms?
- [ ] Check VITE_WEB3FORMS_KEY matches dashboard
- [ ] Check browser Network tab for request status
- [ ] Try submitting a test booking

**Solution:** See [CHAT_WIDGET_SETUP.md](./CHAT_WIDGET_SETUP.md#troubleshooting)

### Bookings Not Saving to Google Sheets

**Checklist:**
- [ ] Is Google Apps Script URL correct in `.env.local`?
- [ ] Did you deploy Google Apps Script as web app?
- [ ] Is sheet name exactly "Bookings"?
- [ ] Did you share Google Sheet with service account?
- [ ] Check Google Apps Script Executions for errors

**Solution:** See [CHAT_WIDGET_SETUP.md](./CHAT_WIDGET_SETUP.md#troubleshooting)

### Double-Booking Prevention Not Working

**Checklist:**
- [ ] Google Apps Script deployed?
- [ ] URL correct in environment variables?
- [ ] Function `checkBookingSlot` exists in script?
- [ ] Google Sheet has data in columns E & F?

**Solution:** Check Google Apps Script execution logs

### Styling/Colors Look Wrong

**Checklist:**
- [ ] Is Tailwind CSS configured?
- [ ] Does `src/index.css` have Tailwind directives?
- [ ] Are you using required Tailwind colors?
- [ ] Try clearing node_modules: `rm -rf node_modules && npm install`

**Solution:** See [CHAT_WIDGET_ADVANCED_CUSTOMIZATION.md](./CHAT_WIDGET_ADVANCED_CUSTOMIZATION.md#color-theming)

---

## 📊 Validation Checklist

Before marking as "done", verify:

- [ ] **Functionality**
  - [ ] Widget opens/closes
  - [ ] Service selection works
  - [ ] Name validation works (try empty/too long)
  - [ ] Email validation works (try invalid format)
  - [ ] Date picker shows only Wed/Fri/Sat
  - [ ] Time slots display correctly
  - [ ] Booked slots are disabled
  - [ ] Notes field is optional
  - [ ] Summary shows all data correctly
  - [ ] Confirm button works
  - [ ] Success message appears
  - [ ] "Book Another" resets form

- [ ] **Integrations**
  - [ ] Email received within 5 minutes
  - [ ] Booking appears in Google Sheets
  - [ ] Timestamp is correct
  - [ ] All fields saved (service, name, email, date, time, notes)
  - [ ] Double-booking prevention works
  - [ ] Can't book same slot twice

- [ ] **Design & UX**
  - [ ] Desktop view looks good (420px width)
  - [ ] Mobile view is fullscreen
  - [ ] Animations are smooth
  - [ ] No animation jank/stuttering
  - [ ] Colors match your brand
  - [ ] Text is readable
  - [ ] Buttons are clickable on mobile

- [ ] **Performance**
  - [ ] Page loads quickly
  - [ ] Widget doesn't block interaction
  - [ ] Animations run at 60fps
  - [ ] No console errors

- [ ] **Accessibility**
  - [ ] Can tab through all buttons
  - [ ] All buttons have focus indicators
  - [ ] Error messages are clear
  - [ ] Color contrast is good

---

## 📞 Quick Reference

| Task | Document | Time |
|------|----------|------|
| Get started | [Quick Start](./CHAT_WIDGET_QUICK_START.md) | 5 min |
| Full setup | [Setup Guide](./CHAT_WIDGET_SETUP.md) | 20 min |
| Customize | [Advanced Guide](./CHAT_WIDGET_ADVANCED_CUSTOMIZATION.md) | 10-30 min |
| Understand | [Architecture](./CHAT_WIDGET_ARCHITECTURE.md) | 20 min |
| Troubleshoot | [Setup Guide](./CHAT_WIDGET_SETUP.md#troubleshooting) | 10 min |
| Dependencies | [Dependencies](./CHAT_WIDGET_DEPENDENCIES.md) | 5 min |

---

## 🎯 Next Steps After Deployment

1. **Monitor** - Check Google Sheets daily for bookings
2. **Optimize** - Track conversion rates and improve
3. **Customize** - Adjust messages and services based on feedback
4. **Promote** - Highlight the new booking system
5. **Maintain** - Keep email verified in Web3Forms
6. **Backup** - Periodically backup Google Sheets

---

## 📝 Deployment Notes

**Date Deployed:** _______________

**Vercel/Netlify URL:** _______________

**Google Sheet ID:** _______________

**Google Apps Script ID:** _______________

**Notes:** 
_______________________________________________________________

---

## ✅ Completion Checklist

When everything is done:

- [ ] All pre-deployment items checked
- [ ] Local testing passed
- [ ] Production deployed
- [ ] Final testing passed
- [ ] Email notifications working
- [ ] Google Sheets updating
- [ ] Team notified
- [ ] Documentation shared
- [ ] Analytics set up (optional)

---

**You're all set! 🚀**

The consultation booking system is now live and ready to convert visitors into clients!

---

## 📞 Support

- **Questions?** Check [CHAT_WIDGET_QUICK_START.md](./CHAT_WIDGET_QUICK_START.md)
- **Not working?** Check [CHAT_WIDGET_SETUP.md](./CHAT_WIDGET_SETUP.md#troubleshooting)
- **Want to customize?** Check [CHAT_WIDGET_ADVANCED_CUSTOMIZATION.md](./CHAT_WIDGET_ADVANCED_CUSTOMIZATION.md)

---

**Happy converting! 🎉**
