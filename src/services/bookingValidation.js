/**
 * Booking Validation Service
 * Validates user input during the consultation booking process
 */

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }
  return { valid: true };
};

export const validateName = (name) => {
  const trimmedName = name.trim();
  if (trimmedName.length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters' };
  }
  if (trimmedName.length > 50) {
    return { valid: false, error: 'Name must not exceed 50 characters' };
  }
  return { valid: true };
};

export const validateDate = (date) => {
  if (!date) {
    return { valid: false, error: 'Please select a date' };
  }

  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    return { valid: false, error: 'Please select a future date' };
  }

  return { valid: true };
};

export const validateTimeSlot = (timeSlot) => {
  if (!timeSlot) {
    return { valid: false, error: 'Please select a time slot' };
  }
  return { valid: true };
};

export const validateNotes = (notes) => {
  if (notes && notes.length > 500) {
    return { valid: false, error: 'Notes must not exceed 500 characters' };
  }
  return { valid: true };
};

export const validateAllFields = (formData) => {
  const errors = {};

  const nameValidation = validateName(formData.name || '');
  if (!nameValidation.valid) {
    errors.name = nameValidation.error;
  }

  const emailValidation = validateEmail(formData.email || '');
  if (!emailValidation.valid) {
    errors.email = emailValidation.error;
  }

  const dateValidation = validateDate(formData.date);
  if (!dateValidation.valid) {
    errors.date = dateValidation.error;
  }

  const timeValidation = validateTimeSlot(formData.timeSlot);
  if (!timeValidation.valid) {
    errors.timeSlot = timeValidation.error;
  }

  const notesValidation = validateNotes(formData.notes);
  if (!notesValidation.valid) {
    errors.notes = notesValidation.error;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};
