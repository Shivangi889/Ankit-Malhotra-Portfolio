import { motion } from 'framer-motion';

const ChatMessage = ({ message, isBot }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 150
      }
    }
  };

  const timeString = message.timestamp instanceof Date 
    ? message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    : new Date(message.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  if (isBot) {
    const words = message.text.split(/(\s+)/);

    return (
      <motion.div
        className="flex justify-start mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="max-w-[85%] bg-[#EAE6E1] text-[#334155] px-4 py-3.5 rounded-[22px] rounded-tl-sm shadow-sm border border-stone-200/40"
          whileHover={{ scale: 1.01 }}
        >
          {/* Animated Stagger Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-sm leading-relaxed whitespace-pre-wrap"
          >
            {words.map((word, idx) => {
              if (/^\s+$/.test(word)) {
                return <span key={idx}>{word}</span>;
              }
              return (
                <motion.span
                  key={idx}
                  variants={wordVariants}
                  className="inline-block font-semibold text-stone-800"
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.div>
          <span className="text-[10px] text-stone-500 mt-2 block font-semibold">
            {timeString}
          </span>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex justify-end mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="max-w-[85%] bg-[#334155] text-[#FAF8F5] px-4 py-3.5 rounded-[22px] rounded-tr-sm shadow-md shadow-stone-200/30"
        whileHover={{ scale: 1.01 }}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
          {message.text}
        </p>
        <span className="text-[10px] text-stone-300 mt-2 block font-semibold text-right">
          {timeString}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ChatMessage;
