# Chat Widget - Architecture & Implementation Details

Complete technical overview of the WhatsApp-style consultation booking system.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      React Application                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              ChatWidget Component                    │  │
│  │  (Floating Button + Chat Drawer)                    │  │
│  └──────────────────────────────────────────────────────┘  │
│           ↓                    ↓                    ↓       │
│  ┌─────────────────┐  ┌──────────────────┐  ┌────────────┐ │
│  │ ChatHeader      │  │ Chat Messages    │  │ Step UI    │ │
│  │                 │  │ + Typing         │  │ (Dynamic)  │ │
│  │ - Avatar        │  │                  │  │            │ │
│  │ - Title         │  │ - ChatMessage    │  │ - Inputs   │ │
│  │ - Subtitle      │  │ - TypingInd...   │  │ - Buttons  │ │
│  │ - Close Btn     │  │                  │  │ - Pickers  │ │
│  └─────────────────┘  └──────────────────┘  └────────────┘ │
│           ↓                                        ↓        │
│  ┌─────────────────────────────────────────────────────────┐│
│  │            useChatFlow Hook                             ││
│  │                                                         ││
│  │ - State Management (messages, formData, errors)        ││
│  │ - Step Logic (GREETING → SUCCESS)                      ││
│  │ - Conversation Flow Control                            ││
│  │ - Validation                                           ││
│  └─────────────────────────────────────────────────────────┘│
│           ↓                                                 │
│  ┌─────────────────────────────────────────────────────────┐│
│  │           Services Layer                               ││
│  ├─────────────────┬──────────────────┬───────────────────┤│
│  │ Web3Forms       │ Google Sheets    │ Validation        ││
│  │ sendBooking     │ saveBooking      │ validateEmail     ││
│  │ Email           │ getBookings      │ validateName      ││
│  │                 │ isSlotBooked     │ etc...            ││
│  └─────────────────┴──────────────────┴───────────────────┘│
│           ↓                     ↓                    ↓     │
│  ┌────────────────┐  ┌──────────────────┐  ┌──────────────┐
│  │ Web3Forms API  │  │ Google Sheets    │  │ Data & Config │
│  │ (Email)        │  │ + Apps Script    │  │              │
│  │                │  │ (Storage)        │  │ - Services   │
│  │ Send emails    │  │                  │  │ - Time slots │
│  │ Notify user    │  │ Double-booking   │  │ - Options    │
│  │                │  │ prevention       │  │              │
│  └────────────────┘  └──────────────────┘  └──────────────┘
└─────────────────────────────────────────────────────────────┘
```

---

## Data Flow

### 1. User Clicks Floating Button
```
Button Click → setIsOpen(true) → ChatWidget renders → AnimatePresence shows drawer
```

### 2. Conversation Flow
```
GREETING
   ↓
(User selects service)
   ↓
SERVICE_SELECTION → handleServiceSelection()
   ↓
addBotMessage("Great choice...")
   ↓
setCurrentStep(NAME_INPUT)
   ↓
(User enters name)
   ↓
... continue through steps ...
```

### 3. Booking Confirmation
```
SUMMARY
   ↓
(User clicks Confirm)
   ↓
handleConfirmBooking()
   ↓
Parallel:
├─ sendBookingEmail(formData) → Web3Forms
├─ saveBookingToSheets(formData) → Google Sheets
└─ addBotMessage("Success!")
   ↓
setCurrentStep(SUCCESS)
```

---

## Step-by-Step Process

### Step 1: GREETING
- Bot shows welcome message
- Quick reply buttons displayed
- User selects service

### Step 2: SERVICE_SELECTION
- Service ID stored in formData
- Transition to NAME_INPUT

### Step 3: NAME_INPUT
- Text input field
- On submit: validateName()
- If valid: store name, transition to EMAIL_INPUT
- If invalid: show error message

### Step 4: EMAIL_INPUT
- Text input field
- On submit: validateEmail()
- If valid: store email, transition to DATE_SELECTION
- If invalid: show error message

### Step 5: DATE_SELECTION
- Calendar picker showing available days
- Only Wednesday, Friday, Saturday by default
- On select: 
  - Validate date
  - Fetch booked slots for that date
  - Transition to TIME_SELECTION

### Step 6: TIME_SELECTION
- Slots displayed based on selected day
- Check if slot is booked
- Show booked slots as disabled
- On select:
  - Validate time slot
  - Store time slot
  - Transition to NOTES_INPUT

### Step 7: NOTES_INPUT
- Optional textarea
- On submit (even empty):
  - Store notes
  - Transition to SUMMARY

### Step 8: SUMMARY
- Display all booking details
- Buttons: Edit, Confirm
- On confirm:
  - Send email
  - Save to Google Sheets
  - Transition to SUCCESS

### Step 9: SUCCESS
- Celebration animation
- Confirmation message
- Buttons: Book Another, Close

---

## Component Hierarchy

```
ChatWidget (Main Component)
├── Floating Button
│   ├── MessageCircle Icon
│   └── Pulse Animation
├── Chat Drawer
│   ├── ChatHeader
│   │   ├── Avatar
│   │   ├── Title & Subtitle
│   │   └── Close Button
│   ├── Messages Container
│   │   ├── ChatMessage (bot)
│   │   ├── ChatMessage (user)
│   │   ├── ChatMessage (bot)
│   │   ├── TypingIndicator
│   │   └── Scroll to bottom
│   └── Step-Specific UI (rendered by renderStepContent())
│       ├── QuickReplies
│       ├── ChatInput
│       ├── DateSelector
│       ├── TimeSlotSelector
│       ├── BookingSummary
│       └── Success Screen
└── Backdrop (click to close)
```

---

## State Management

### useChatFlow Hook State

```javascript
{
  currentStep: 'name_input',           // Current conversation step
  messages: [                           // Chat history
    {
      id: timestamp,
      type: 'bot' | 'user' | 'typing',
      text: 'message text',
      timestamp: Date,
      stepType: 'greeting' // optional
    }
  ],
  formData: {
    service: 'career-guidance',        // Selected service ID
    name: 'John Doe',                  // User name
    email: 'john@example.com',         // User email
    date: '2024-12-20',                // Selected date (YYYY-MM-DD)
    timeSlot: '7:00 PM',               // Selected time
    notes: 'Additional context...'     // Optional notes
  },
  errors: {
    email: 'Invalid email format'      // Validation errors
  },
  isLoading: false,                    // Loading state
  bookedSlots: ['7:00 PM', '8:00 PM'] // Already booked times
}
```

---

## Services Integration

### Web3Forms Service

**File:** `src/services/web3forms.js`

**Functions:**
- `sendBookingEmail(bookingData)` - Send email notification

**Process:**
1. Format booking data
2. Send POST request to Web3Forms API
3. Web3Forms handles email delivery
4. Return success/error status

**Payload:**
```json
{
  "access_key": "WEB3FORMS_KEY",
  "subject": "New Consultation Booking - Career Guidance",
  "from_name": "John Doe",
  "email": "john@example.com",
  "message": "Formatted booking details...",
  "booking_service": "career-guidance",
  "booking_date": "2024-12-20",
  "booking_time": "7:00 PM",
  "booking_notes": "User notes..."
}
```

### Google Sheets Service

**File:** `src/services/googleSheets.js`

**Functions:**
- `saveBookingToSheets(bookingData)` - Store booking
- `isSlotBooked(date, timeSlot)` - Check availability
- `getBookedSlotsForDate(date)` - Get all bookings for date

**Process:**
1. Send data to Google Apps Script
2. Apps Script appends row to Google Sheet
3. Return confirmation

**Google Apps Script Endpoints:**

```
POST /submit
├─ Body: booking data
└─ Action: Save to sheet

GET ?action=checkBooking&date=YYYY-MM-DD&timeSlot=HH:MM%20AM
├─ Query: date + timeSlot
└─ Return: { isBooked: boolean }

GET ?action=getBookings&date=YYYY-MM-DD
├─ Query: date
└─ Return: { bookings: ['7:00 PM', '8:00 PM'] }
```

### Validation Service

**File:** `src/services/bookingValidation.js`

**Functions:**
- `validateEmail(email)` - Email format check
- `validateName(name)` - Name length & format
- `validateDate(date)` - Date in future
- `validateTimeSlot(timeSlot)` - Slot selected
- `validateNotes(notes)` - Notes length
- `validateAllFields(formData)` - All together

**Returns:**
```javascript
{
  valid: true,
  errors: {} // or { email: 'Invalid format' }
}
```

---

## Data Files

### consultationOptions.js
Defines available services:
```javascript
[
  {
    id: 'unique-id',
    label: 'Display Name',
    icon: 'Emoji',
    description: 'Brief description'
  }
]
```

### timeSlots.js
Defines available time slots per day:
```javascript
{
  wednesday: [
    { time: '7:00 PM', id: 'wed-1900' },
    ...
  ],
  friday: [...],
  saturday: [...]
}
```

Also includes:
- `dayNameMap`: Day number to name mapping
- `availableDays`: Array of available weekdays

---

## Framer Motion Animations

### Key Animations

1. **Floating Button**
   - Pulse: Continuous gentle bounce
   - Scale: Hover effect
   - Ripple: Expanding wave

2. **Chat Drawer**
   - Slide-up: From bottom with spring
   - Fade: Opacity transition

3. **Messages**
   - Fade + Slide: New messages appear
   - Stagger: Multiple items cascade

4. **Quick Replies**
   - Stagger children: Buttons appear sequentially
   - Hover: Scale and slide right

5. **Input Buttons**
   - Scale: Hover effect
   - Scale + Tap: Click feedback

6. **Success Animation**
   - Rotate: Celebration emoji spins

---

## Responsive Design

### Desktop (420px width)
- Drawer positioned bottom-right
- 650px height, 420px width
- Fixed position

### Tablet (768px - 1024px)
- Same as desktop
- Takes 80% of viewport

### Mobile (< 768px)
- Fullscreen drawer
- 100vw width, 100vh height
- Slides up from bottom
- Touch-friendly buttons

```javascript
// In ChatWidget.jsx
style={{
  width: '100vw',      // Full width on mobile
  height: '100vh',     // Full height on mobile
  maxWidth: '420px',   // Max width on desktop
  maxHeight: '650px'   // Max height on desktop
}}
```

---

## Accessibility Features

### Keyboard Navigation
- All buttons are focusable
- Tab order is logical
- Enter/Space to activate
- Escape to close (can be added)

### Screen Readers
- ARIA labels on buttons
- Descriptive link text
- Role attributes
- Focus indicators

### Color Contrast
- Text meets WCAG AA (4.5:1)
- Focus states visible
- Error colors accessible

---

## Error Handling

### Validation Errors
```javascript
if (!validation.valid) {
  setErrors({ [field]: validation.error });
  return; // Don't proceed
}
```

### API Errors
```javascript
const result = await sendBookingEmail(formData);
if (!result.success) {
  console.error('Email error:', result.error);
  // Show user-friendly message
}
```

### Google Sheets Errors
```javascript
if (!GOOGLE_APPS_SCRIPT_URL) {
  console.warn('Google Sheets service not configured');
  // Continue without Sheets (optional)
}
```

---

## Performance Considerations

### Optimization Techniques

1. **Lazy Rendering**
   - Only render visible messages
   - Use AnimatePresence for efficient unmounting

2. **Memoization**
   - Callback functions memoized with useCallback
   - Prevent unnecessary re-renders

3. **Code Splitting**
   - Each component is separate file
   - Can lazy load if needed

4. **Image Optimization**
   - Uses SVG icons (Lucide React)
   - No image assets needed

5. **CSS-in-JS**
   - Minimal inline styles
   - Tailwind for styling

### Potential Bottlenecks

- Frequent API calls to Google Sheets
- Large message history (limit to 50 messages)
- Excessive animations (disable if needed)

---

## Security Considerations

### API Keys
- `VITE_WEB3FORMS_KEY` is exposed to client (intended by Web3Forms)
- `VITE_GOOGLE_APPS_SCRIPT_URL` is public (no sensitive data)
- Consider rate limiting on Google Apps Script

### CORS
- Web3Forms allows CORS
- Google Apps Script allows CORS
- Validate on backend if needed

### Data Protection
- Email addresses stored in Google Sheets
- Consider encrypting sensitive data
- Comply with privacy regulations (GDPR, CCPA)

---

## Testing Strategy

### Unit Tests
```javascript
// validateEmail.test.js
describe('validateEmail', () => {
  it('should accept valid emails', () => {
    expect(validateEmail('test@example.com').valid).toBe(true);
  });
  
  it('should reject invalid emails', () => {
    expect(validateEmail('invalid').valid).toBe(false);
  });
});
```

### Integration Tests
```javascript
// ChatWidget.integration.test.js
describe('Chat Widget Flow', () => {
  it('should complete booking flow', async () => {
    // Step through entire flow
    // Verify each step state
    // Check final submission
  });
});
```

### E2E Tests
```javascript
// cypress/e2e/booking.cy.js
describe('Booking Flow', () => {
  it('should complete booking', () => {
    cy.visit('/');
    cy.get('[data-cy=chat-button]').click();
    // ... continue through flow
  });
});
```

---

## Deployment Checklist

- [ ] Install dependencies: `npm install framer-motion lucide-react`
- [ ] Set environment variables
- [ ] Deploy Google Apps Script
- [ ] Set up Web3Forms
- [ ] Create Google Sheet with correct columns
- [ ] Test booking flow locally
- [ ] Test on mobile devices
- [ ] Check email notifications
- [ ] Verify Google Sheets updates
- [ ] Deploy to production
- [ ] Monitor for errors
- [ ] Collect user feedback

---

## Future Enhancements

1. **Phone Number Field** - Add validation & display
2. **Timezone Support** - Auto-detect user timezone
3. **File Upload** - Resume/portfolio upload
4. **Rating & Feedback** - Post-booking survey
5. **Reminders** - Automated reminder emails
6. **Rescheduling** - Allow booking changes
7. **Admin Dashboard** - Manage bookings
8. **Calendar Sync** - Sync with Google Calendar
9. **Multi-language** - Support multiple languages
10. **Video Call** - Integration with Zoom/Meet

---

## Troubleshooting Reference

| Issue | Cause | Solution |
|-------|-------|----------|
| Widget not visible | Wrong z-index | Check z-50 in ChatWidget.jsx |
| No animations | Framer Motion not installed | `npm install framer-motion` |
| Emails not sent | Invalid Web3Forms key | Verify key in Web3Forms dashboard |
| Bookings not saved | Google Apps Script URL wrong | Re-deploy and copy URL |
| Date picker broken | Timezone issue | Check dayNameMap and timeSlots |
| Mobile layout broken | CSS issues | Check Tailwind breakpoints |
| Double bookings allowed | Query not working | Check Google Apps Script logs |
| Slow performance | Too many messages | Implement message history limit |

---

This architecture supports scalability and easy customization. Enjoy building! 🚀
