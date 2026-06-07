import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import QuickReplies from './QuickReplies';
import ChatInput from './ChatInput';
import DateSelector from './DateSelector';
import TimeSlotSelector from './TimeSlotSelector';
import BookingSummary from './BookingSummary';
import { useChatFlow } from '../../hooks/useChatFlow';
import { sendBookingEmail } from '../../services/web3forms';
import { saveBookingToSheets } from '../../services/googleSheets';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    currentStep,
    messages,
    messagesEndRef,
    formData,
    errors,
    isLoading,
    bookedSlots,
    STEPS,
    consultationOptions,
    handleServiceSelection,
    handleNameInput,
    handleEmailInput,
    handleDateSelection,
    handleTimeSlotSelection,
    handleNotesInput,
    handleConfirmBooking,
    handleResetChat,
    addBotMessage,
    addUserMessage
  } = useChatFlow();

  const handleWidgetClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleConfirmBookingClick = async () => {
    handleConfirmBooking();

    // Send to Web3Forms
    if (process.env.VITE_WEB3FORMS_KEY) {
      await sendBookingEmail(formData);
    }

    // Save to Google Sheets
    if (process.env.VITE_GOOGLE_APPS_SCRIPT_URL) {
      await saveBookingToSheets(formData);
    }
  };

  const handleBookAnother = () => {
    handleResetChat();
  };

  const handleEditBooking = () => {
    // Go back to service selection
    addBotMessage(
      "Hi 👋\n\nI'm Ankit's assistant.\n\nWhat would you like help with?"
    );
    handleResetChat();
  };

  // Render different UI based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case STEPS.GREETING:
      case STEPS.SERVICE_SELECTION:
        return (
          <QuickReplies
            options={consultationOptions}
            onSelect={handleServiceSelection}
            isLoading={isLoading}
          />
        );

      case STEPS.NAME_INPUT:
        return (
          <ChatInput
            placeholder="Enter your name..."
            onSubmit={handleNameInput}
            isLoading={isLoading}
            error={errors.name}
          />
        );

      case STEPS.EMAIL_INPUT:
        return (
          <ChatInput
            placeholder="Enter your email..."
            onSubmit={handleEmailInput}
            isLoading={isLoading}
            error={errors.email}
          />
        );

      case STEPS.DATE_SELECTION:
        return (
          <DateSelector
            onDateSelect={handleDateSelection}
            bookedSlots={bookedSlots}
          />
        );

      case STEPS.TIME_SELECTION:
        return (
          <TimeSlotSelector
            selectedDate={formData.date}
            onTimeSlotSelect={handleTimeSlotSelection}
            bookedSlots={bookedSlots}
            isLoading={isLoading}
            error={errors.timeSlot}
          />
        );

      case STEPS.NOTES_INPUT:
        return (
          <ChatInput
            placeholder="Add any additional notes (optional)..."
            onSubmit={handleNotesInput}
            isLoading={isLoading}
            isMultiline={true}
          />
        );

      case STEPS.SUMMARY:
        return (
          <BookingSummary
            formData={formData}
            onEdit={handleEditBooking}
            onConfirm={handleConfirmBookingClick}
            isLoading={isLoading}
          />
        );

      case STEPS.SUCCESS:
        return (
          <motion.div
            className="px-6 py-6 space-y-4 bg-[#FAF8F5]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="text-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-5xl">🎉</span>
            </motion.div>

            <div className="flex gap-3">
              <motion.button
                onClick={handleBookAnother}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-5 py-3 rounded-full border border-stone-300 text-stone-700 font-semibold hover:bg-stone-100 transition-all duration-200"
              >
                Book Another
              </motion.button>

              <motion.button
                onClick={handleCloseChat}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-5 py-3 rounded-full bg-[#334155] text-white font-semibold hover:bg-[#1E293B] shadow-md transition-all duration-200"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Floating Launcher and Tooltip */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className="mb-3 bg-[#FAF8F5] border border-stone-200 text-[#334155] px-4 py-2.5 rounded-2xl shadow-lg shadow-stone-200/50 text-sm font-semibold whitespace-nowrap flex items-center gap-2 relative pointer-events-none"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
              transition={{
                opacity: { duration: 0.3 },
                y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
              }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
            >
              <span>Have an idea? Let's brainstorm! 💡</span>
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#FAF8F5] border-r border-b border-stone-200 transform rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleWidgetClick}
          className="relative w-16 h-16 flex items-center justify-center focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-16 h-16 bg-[#334155] rounded-full shadow-lg shadow-stone-300/40 flex items-center justify-center cursor-pointer border border-stone-200"
          >
            <MessageCircle size={28} className="text-white" />
          </motion.div>

          {/* Pulse Animation */}
          <motion.div
            className="absolute w-16 h-16 rounded-full border border-stone-300"
            animate={{ scale: [1, 1.25], opacity: [0.8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.button>
      </div>

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-10 z-40 md:bg-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseChat}
            />

            {/* Chat Window */}
            <motion.div
              className="fixed bottom-0 right-0 z-50 md:bottom-6 md:right-6 md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col border border-stone-200 bg-[#FAF8F5]"
              style={{
                width: '100vw',
                height: '100vh',
                maxWidth: '480px',
                maxHeight: '680px'
              }}
              initial={{ opacity: 0, y: 100, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 100, x: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            >
              {/* Header */}
              <ChatHeader onClose={handleCloseChat} currentStep={currentStep} STEPS={STEPS} />

              {/* Messages Container */}
              <div className="flex-grow overflow-y-auto bg-[#FAF8F5] px-6 py-6 space-y-4 custom-scrollbar">
                <AnimatePresence mode="wait">
                  {messages.map((message) => {
                    if (message.type === 'typing') {
                      return <TypingIndicator key={message.id} />;
                    }

                    return (
                      <ChatMessage
                        key={message.id}
                        message={message}
                        isBot={message.type === 'bot'}
                      />
                    );
                  })}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              {/* Step Content */}
              <div className="bg-[#FAF8F5] border-t border-stone-200/60">
                <AnimatePresence mode="wait">
                  {renderStepContent()}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #e4e4e7 #FAF8F5;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #FAF8F5;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e4e4e7;
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d4d4d8;
        }
      `}</style>
    </>
  );
};

export default ChatWidget;
