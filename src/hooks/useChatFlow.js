import { useState, useCallback, useRef, useEffect } from 'react';
import { consultationOptions } from '../Data/consultationOptions';
import { timeSlots, dayNameMap, availableDays } from '../Data/timeSlots';
import { validateEmail, validateName, validateDate, validateTimeSlot } from '../services/bookingValidation';
import { getBookedSlotsForDate, isSlotBooked } from '../services/googleSheets';

const STEPS = {
  GREETING: 'greeting',
  SERVICE_SELECTION: 'service_selection',
  NAME_INPUT: 'name_input',
  EMAIL_INPUT: 'email_input',
  DATE_SELECTION: 'date_selection',
  TIME_SELECTION: 'time_selection',
  NOTES_INPUT: 'notes_input',
  SUMMARY: 'summary',
  SUCCESS: 'success'
};

export const useChatFlow = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.GREETING);
  const [messages, setMessages] = useState(() => [
    {
      id: Date.now(),
      type: 'bot',
      text: "Hi 👋\n\nI'm Ankit's assistant.\n\nWhat would you like help with?",
      timestamp: new Date(),
      stepType: STEPS.GREETING
    }
  ]);
  const [formData, setFormData] = useState({
    service: null,
    name: '',
    email: '',
    date: null,
    timeSlot: null,
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addBotMessage = useCallback((text, stepType = null) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'bot',
      text,
      timestamp: new Date(),
      stepType
    }]);
  }, []);

  const addUserMessage = useCallback((text) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      text,
      timestamp: new Date()
    }]);
  }, []);

  const addTypingIndicator = useCallback(() => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'typing',
      timestamp: new Date()
    }]);
  }, []);

  const removeTypingIndicator = useCallback(() => {
    setMessages(prev => prev.filter(msg => msg.type !== 'typing'));
  }, []);

  const handleServiceSelection = useCallback((serviceId) => {
    const selectedService = consultationOptions.find(opt => opt.id === serviceId);
    addUserMessage(selectedService.label);
    setFormData(prev => ({ ...prev, service: serviceId }));

    setTimeout(() => {
      addTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        addBotMessage("Great choice 🚀\n\nWhat is your name?");
        setCurrentStep(STEPS.NAME_INPUT);
      }, 800);
    }, 300);
  }, [addUserMessage, addTypingIndicator, removeTypingIndicator, addBotMessage]);

  const handleNameInput = useCallback((name) => {
    addUserMessage(name);
    const validation = validateName(name);

    if (!validation.valid) {
      setErrors({ name: validation.error });
      return;
    }

    setErrors({});
    setFormData(prev => ({ ...prev, name }));

    setTimeout(() => {
      addTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        addBotMessage("What's your email address?");
        setCurrentStep(STEPS.EMAIL_INPUT);
      }, 800);
    }, 300);
  }, [addUserMessage, addTypingIndicator, removeTypingIndicator, addBotMessage]);

  const handleEmailInput = useCallback((email) => {
    addUserMessage(email);
    const validation = validateEmail(email);

    if (!validation.valid) {
      setErrors({ email: validation.error });
      return;
    }

    setErrors({});
    setFormData(prev => ({ ...prev, email }));

    setTimeout(() => {
      addTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        addBotMessage("Choose your preferred consultation date.");
        setCurrentStep(STEPS.DATE_SELECTION);
      }, 800);
    }, 300);
  }, [addUserMessage, addTypingIndicator, removeTypingIndicator, addBotMessage]);

  const handleDateSelection = useCallback(async (date) => {
    const dateString = date.toISOString().split('T')[0];
    addUserMessage(date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));

    const validation = validateDate(dateString);
    if (!validation.valid) {
      setErrors({ date: validation.error });
      return;
    }

    setErrors({});
    setFormData(prev => ({ ...prev, date: dateString }));

    // Fetch booked slots for the selected date
    setIsLoading(true);
    const bookedSlotsForDate = await getBookedSlotsForDate(dateString);
    setBookedSlots(bookedSlotsForDate);
    setIsLoading(false);

    setTimeout(() => {
      addTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        addBotMessage("Select a time slot.");
        setCurrentStep(STEPS.TIME_SELECTION);
      }, 800);
    }, 300);
  }, [addUserMessage, addTypingIndicator, removeTypingIndicator, addBotMessage]);

  const handleTimeSlotSelection = useCallback(async (timeSlot) => {
    addUserMessage(timeSlot);

    // Check if slot is booked
    const isBooked = await isSlotBooked(formData.date, timeSlot);
    if (isBooked) {
      setErrors({ timeSlot: '⚠️ This slot has already been booked. Please choose another time.' });
      return;
    }

    const validation = validateTimeSlot(timeSlot);
    if (!validation.valid) {
      setErrors({ timeSlot: validation.error });
      return;
    }

    setErrors({});
    setFormData(prev => ({ ...prev, timeSlot }));

    setTimeout(() => {
      addTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        addBotMessage("Anything else you'd like Ankit to know? (Optional)");
        setCurrentStep(STEPS.NOTES_INPUT);
      }, 800);
    }, 300);
  }, [formData.date, addUserMessage, addTypingIndicator, removeTypingIndicator, addBotMessage]);

  const handleNotesInput = useCallback((notes) => {
    if (notes) {
      addUserMessage(notes);
    } else {
      addUserMessage('(No additional notes)');
    }

    setFormData(prev => ({ ...prev, notes }));

    setTimeout(() => {
      addTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        addBotMessage('Let me confirm your booking details:');
        setCurrentStep(STEPS.SUMMARY);
      }, 800);
    }, 300);
  }, [addUserMessage, addTypingIndicator, removeTypingIndicator, addBotMessage]);

  const handleConfirmBooking = useCallback(async () => {
    setIsLoading(true);
    addTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      addBotMessage("🎉 Your consultation request has been submitted successfully.\n\nAnkit will contact you shortly.");
      setCurrentStep(STEPS.SUCCESS);
      setIsLoading(false);
    }, 1200);
  }, [addTypingIndicator, removeTypingIndicator, addBotMessage]);

  const handleResetChat = useCallback(() => {
    setCurrentStep(STEPS.GREETING);
    setMessages([]);
    setFormData({
      service: null,
      name: '',
      email: '',
      date: null,
      timeSlot: null,
      notes: ''
    });
    setErrors({});
    setBookedSlots([]);
    addBotMessage(
      "Hi 👋\n\nI'm Ankit's assistant.\n\nWhat would you like help with?",
      STEPS.GREETING
    );
  }, [addBotMessage]);

  return {
    currentStep,
    messages,
    messagesEndRef,
    formData,
    errors,
    isLoading,
    bookedSlots,
    STEPS,
    consultationOptions,
    timeSlots,
    dayNameMap,
    availableDays,
    handleServiceSelection,
    handleNameInput,
    handleEmailInput,
    handleDateSelection,
    handleTimeSlotSelection,
    handleNotesInput,
    handleConfirmBooking,
    handleResetChat,
    setErrors,
    addBotMessage,
    addUserMessage,
    addTypingIndicator
  };
};
