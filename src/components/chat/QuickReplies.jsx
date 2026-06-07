import { motion } from 'framer-motion';

const QuickReplies = ({ options, onSelect, isLoading }) => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-6 py-4 bg-[#FAF8F5]"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {options.map((option) => (
        <motion.button
          key={option.id}
          onClick={() => onSelect(option.id)}
          disabled={isLoading}
          variants={itemVariants}
          whileHover={!isLoading ? { scale: 1.03, y: -2 } : {}}
          whileTap={!isLoading ? { scale: 0.98 } : {}}
          className="text-left p-4 rounded-[22px] bg-white border border-stone-200 hover:border-[#334155] hover:shadow-md hover:shadow-stone-200/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col justify-between min-h-[115px] focus:outline-none cursor-pointer"
        >
          <div className="flex items-start gap-2.5">
            <span className="text-lg bg-[#FAF8F5] p-1.5 rounded-xl border border-stone-150 flex items-center justify-center">
              {option.icon}
            </span>
            <span className="font-bold text-stone-800 text-sm mt-1 leading-tight">{option.label}</span>
          </div>
          <p className="text-[11px] text-stone-500 leading-snug line-clamp-2 mt-2 font-semibold">
            {option.description}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default QuickReplies;
