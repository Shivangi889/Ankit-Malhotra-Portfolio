import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ChatInput = ({ onSubmit, placeholder = 'Type your message...', isLoading = false, isMultiline = false, error = null }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.messageInput;
    const message = input.value.trim();
    
    if (message) {
      onSubmit(message);
      input.value = '';
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex gap-3 px-6 py-4 border-t border-stone-200/60 bg-[#FAF8F5] items-end"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex-grow">
        {error && (
          <motion.p
            className="text-red-500 text-xs mb-2 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}
        <motion.textarea
          name="messageInput"
          placeholder={placeholder}
          disabled={isLoading}
          rows={isMultiline ? 3 : 1}
          className="w-full px-4 py-3 rounded-[20px] border border-stone-200 bg-white focus:border-[#334155] focus:ring-1 focus:ring-[#334155]/20 outline-none resize-none disabled:bg-stone-100 disabled:cursor-not-allowed text-sm font-medium text-stone-800"
          initial={{ borderColor: '#e4e4e7' }}
          whileFocus={{ borderColor: '#334155' }}
        />
      </div>
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={!isLoading ? { scale: 1.05 } : {}}
        whileTap={!isLoading ? { scale: 0.95 } : {}}
        className="bg-[#334155] hover:bg-[#1E293B] text-white p-3.5 rounded-full shadow-sm hover:shadow transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center focus:outline-none cursor-pointer flex-shrink-0 mb-0.5"
      >
        <Send size={16} />
      </motion.button>
    </motion.form>
  );
};

export default ChatInput;
