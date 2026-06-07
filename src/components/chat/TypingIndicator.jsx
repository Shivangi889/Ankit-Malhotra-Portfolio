import { motion } from 'framer-motion';

const TypingIndicator = () => {
  return (
    <motion.div
      className="flex justify-start mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-[#EAE6E1] px-5 py-3 rounded-[22px] rounded-tl-sm border border-stone-200/40 shadow-sm flex items-center gap-1.5 min-w-[56px] justify-center">
        <motion.span
          className="w-1.5 h-1.5 bg-stone-500 rounded-full"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.span
          className="w-1.5 h-1.5 bg-stone-500 rounded-full"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
        />
        <motion.span
          className="w-1.5 h-1.5 bg-stone-500 rounded-full"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
