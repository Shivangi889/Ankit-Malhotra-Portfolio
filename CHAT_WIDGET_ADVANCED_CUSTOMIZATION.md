# Chat Widget - Advanced Customization Guide

Deep dive into customizing every aspect of your consultation booking system.

---

## Color Theming

### Using a Different Color Scheme

The system currently uses purple (`#6503ab`). To change:

#### Option 1: Tailwind CSS Classes (Recommended)

Replace `purple-*` with your color:

**Files to update:**
- `src/components/chat/ChatWidget.jsx`
- `src/components/chat/ChatHeader.jsx`
- `src/components/chat/ChatMessage.jsx`
- `src/components/chat/QuickReplies.jsx`
- `src/components/chat/TimeSlotSelector.jsx`
- `src/components/chat/BookingSummary.jsx`

**Example: Change from Purple to Blue**
```jsx
// Before
className="bg-gradient-to-r from-purple-600 to-purple-700"

// After
className="bg-gradient-to-r from-blue-600 to-blue-700"
```

**Color mapping:**
- Primary button: `purple-600` → `blue-600`
- Darker shade: `purple-700` → `blue-700`
- Light hover: `purple-50` → `blue-50`
- Border: `purple-200` → `blue-200`
- Text: `purple-600` → `blue-600`
- Gradient: `from-purple-600 to-purple-700` → `from-blue-600 to-blue-700`

#### Option 2: Custom CSS Variables

Add to your global CSS:

```css
:root {
  --chat-primary: #6503ab;
  --chat-primary-light: #e1befa;
  --chat-primary-dark: #4a0280;
  --chat-hover: #7e2ba5;
  --chat-text: #ffffff;
}
```

Then update components to use CSS variables via inline styles.

---

## Consultation Services

### Adding Custom Services

Edit `src/data/consultationOptions.js`:

```javascript
export const consultationOptions = [
  {
    id: 'unique-id',           // Must be unique
    label: 'Service Name',      // Display text
    icon: '🎯',                 // Emoji icon
    description: 'Brief description'  // Tooltip text
  }
];
```

**Icon ideas:**
- Career: 🎯, 📈, 🚀, 💼
- Technical: ⚛️, 💻, 🛠️, 🔧
- Design: 🎨, 🖌️, ✨, 🎭
- Business: 💰, 📊, 📱, 🏆

---

## Time Slots & Availability

### Customize Available Days

Edit `src/data/timeSlots.js`:

```javascript
export const timeSlots = {
  // Days available for booking
  monday: [
    { time: '9:00 AM', id: 'mon-0900' },
    { time: '10:00 AM', id: 'mon-1000' },
    { time: '2:00 PM', id: 'mon-1400' },
    { time: '3:00 PM', id: 'mon-1500' }
  ],
  tuesday: [
    { time: '9:00 AM', id: 'tue-0900' },
    { time: '6:00 PM', id: 'tue-1800' }
  ],
  // Add more days as needed
};

// Only these days will be available
export const availableDays = ['monday', 'tuesday', 'wednesday', 'friday'];
```

### Day Name Mapping

```javascript
export const dayNameMap = {
  0: 'sunday',    // 0 = Sunday
  1: 'monday',    // 1 = Monday
  2: 'tuesday',   // etc...
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday'
};
```

### Block Out Specific Dates

Edit `src/components/chat/DateSelector.jsx`:

```javascript
const getDaysForNextNDays = (n) => {
  const days = [];
  const today = new Date();
  const blockedDates = ['2024-12-25', '2024-01-01']; // Holiday dates
  
  for (let i = 1; i <= n; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    
    const dateString = date.toISOString().split('T')[0];
    if (blockedDates.includes(dateString)) {
      continue; // Skip blocked date
    }
    
    // ... rest of logic
  }
};
```

---

## Chat Flow & Messages

### Customize Bot Messages

Edit `src/hooks/useChatFlow.js`:

```javascript
// Greeting message
addBotMessage(
  "Hi 👋\n\nI'm Ankit's assistant.\n\nWhat would you like help with?"
);

// After service selection
addBotMessage("Great choice 🚀\n\nWhat is your name?");

// Email request
addBotMessage("What's your email address?");

// Success message
addBotMessage("🎉 Your consultation request has been submitted successfully.\n\nAnkit will contact you shortly.");
```

### Change Validation Messages

Edit `src/services/bookingValidation.js`:

```javascript
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { 
      valid: false, 
      error: 'Please enter a valid email address' // Change this
    };
  }
  return { valid: true };
};
```

---

## Animations & Transitions

### Modify Animation Speed

Edit component files and adjust Framer Motion transitions:

```javascript
// Make animations faster
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.15 }} // Decrease duration

// Make animations slower
transition={{ duration: 0.8 }} // Increase duration
```

### Disable Animations

Remove `motion.` wrapper or set transition to 0:

```javascript
// Instead of:
<motion.button animate={{ scale: 1.1 }} />

// Use:
<button />
```

### Custom Animation Variants

```javascript
const messageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.9 }
};
```

---

## Email Notifications

### Customize Email Content

Edit `src/services/web3forms.js`:

```javascript
const formatEmailMessage = (bookingData) => {
  return `
Your custom email content here!

Service: ${bookingData.service}
Name: ${bookingData.name}
Email: ${bookingData.email}
Date: ${bookingData.date}
Time Slot: ${bookingData.timeSlot}

Notes:
${bookingData.notes || 'None provided'}

${new Date().toLocaleString()}
  `.trim();
};
```

### Change Email Sender

In Web3Forms settings:
1. Go to [Web3Forms](https://web3forms.com) dashboard
2. Set "From Name" and reply-to email
3. Customize email template

---

## Google Sheets Integration

### Add More Data Columns

Edit `google-apps-script.js`:

```javascript
// Current columns:
// A: Timestamp, B: Service, C: Name, D: Email, E: Date, F: Time Slot, G: Notes

// To add more columns, modify saveBooking function:
sheet.appendRow([
  data.timestamp,
  data.service,
  data.name,
  data.email,
  data.date,
  data.timeSlot,
  data.notes,
  data.phone,        // New
  data.companyName,  // New
  data.budget        // New
]);
```

Then in `src/hooks/useChatFlow.js`, add steps for new fields.

### Read Data from Google Sheets

The system already has functions to read bookings. To fetch all bookings:

```javascript
// In googleSheets.js
export const getAllBookings = async () => {
  const response = await fetch(
    `${GOOGLE_APPS_SCRIPT_URL}?action=getAllBookings`,
    { method: 'GET' }
  );
  const result = await response.json();
  return result.bookings || [];
};

// Then add to google-apps-script.js:
function getAllBookings() {
  const sheet = ss.getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  return { bookings: data };
}
```

---

## Mobile Experience

### Full-Screen on Mobile

The component already handles this. To adjust breakpoint:

```javascript
// In ChatWidget.jsx
style={{
  width: '100vw',
  height: '100vh',
  maxWidth: '420px',    // Desktop width
  maxHeight: '650px'    // Desktop height
}}
```

### Custom Mobile Height

```javascript
// Make it taller on mobile
const isMobile = window.innerWidth < 768;
const height = isMobile ? '90vh' : '650px';
```

---

## Validation Rules

### Email Validation

Change regex in `src/services/bookingValidation.js`:

```javascript
// Current: Standard email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Stricter: Email with common domains only
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
```

### Name Validation

```javascript
export const validateName = (name) => {
  const trimmedName = name.trim();
  
  // Customize length requirements
  if (trimmedName.length < 3) { // Was 2
    return { valid: false, error: 'Name must be at least 3 characters' };
  }
  
  if (trimmedName.length > 50) {
    return { valid: false, error: 'Name must not exceed 50 characters' };
  }
  
  // Add pattern check (letters only)
  if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
    return { valid: false, error: 'Name must contain only letters' };
  }
  
  return { valid: true };
};
```

---

## Advanced Features

### Add Timezone Support

In `DateSelector.jsx`:

```javascript
const selectedDate = new Date(date);
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log('User timezone:', userTimezone);

// Store with timezone in booking
const bookingData = {
  ...formData,
  timezone: userTimezone,
  date: selectedDate.toISOString()
};
```

### Add Phone Number Field

1. Add to formData in `useChatFlow.js`
2. Add step between email and date
3. Add validation in `bookingValidation.js`
4. Update Google Sheets columns
5. Include in email and summary

### Add File Upload

```javascript
// In ChatInput.jsx, add file input
<input type="file" name="attachment" accept=".pdf,.doc,.docx" />
```

Then handle in the form submission.

---

## Performance Optimization

### Lazy Load Google Sheets Data

```javascript
// Only fetch booked slots when needed
const [bookedSlots, setBookedSlots] = useState(null);

useEffect(() => {
  if (currentStep === STEPS.DATE_SELECTION && formData.date) {
    fetchBookedSlots();
  }
}, [currentStep, formData.date]);
```

### Memoize Components

```javascript
import { memo } from 'react';

export default memo(ChatMessage, (prev, next) => {
  return prev.message.id === next.message.id;
});
```

### Debounce Input

```javascript
const [name, setName] = useState('');

const handleNameChange = useCallback(
  debounce((value) => {
    setName(value);
  }, 300),
  []
);
```

---

## Accessibility

### Add ARIA Labels

```javascript
<button
  aria-label="Open consultation chat"
  aria-describedby="chat-description"
>
  <MessageCircle />
</button>
<span id="chat-description" className="sr-only">
  Book a consultation with Ankit
</span>
```

### Keyboard Navigation

Ensure all buttons are focusable:

```javascript
<button className="focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
```

### Color Contrast

Ensure text meets WCAG AA standards (4.5:1 ratio).

---

## Testing

### Test Booking Flow

```javascript
// Manually test:
1. Click floating button
2. Select service
3. Enter name
4. Enter email
5. Select date
6. Select time
7. Add notes
8. Review summary
9. Confirm booking
10. Check email received
11. Check Google Sheets updated
```

### Check Console Errors

Open browser DevTools and check Console tab for any errors.

### Test on Multiple Devices

- Test on iPhone, Android, Tablet, Desktop
- Test in Chrome, Firefox, Safari, Edge
- Test with keyboard navigation
- Test with screen readers

---

## Deployment

### Vercel
```bash
vercel deploy
```
Make sure `.env.local` is set.

### Netlify
1. Connect GitHub repo
2. Set environment variables in Netlify settings
3. Deploy

### Environment Variables in Production
Add these in your deployment platform:
- `VITE_WEB3FORMS_KEY`
- `VITE_GOOGLE_APPS_SCRIPT_URL`

---

## Troubleshooting

### Widget not showing
- Check browser console for errors
- Verify ChatWidget is imported and added to App
- Check z-index (set to 40-50)

### Animations not working
- Verify Framer Motion is installed
- Check browser supports CSS animations
- Try disabling animations in dev settings

### Email not sending
- Check Web3Forms key in `.env`
- Verify email confirmed in Web3Forms
- Check CORS (Web3Forms allows CORS)

### Bookings not saving
- Verify Google Apps Script deployment URL
- Check sheet name matches code
- Look for errors in Apps Script Executions tab

---

Happy customizing! 🎉
