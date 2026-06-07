import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const DateSelector = ({ onDateSelect, onBack, bookedSlots = [] }) => {
  const getDaysForNextNDays = (n) => {
    const days = [];
    const today = new Date();
    
    for (let i = 1; i <= n; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      
      // Only include Wednesday, Friday, and Saturday
      const dayOfWeek = date.getDay();
      if ([3, 5, 6].includes(dayOfWeek)) {
        days.push(date);
      }
    }
    
    return days.slice(0, 8); // Return up to 8 available days
  };

  const availableDays = getDaysForNextNDays(30);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="px-6 py-5 bg-[#FAF8F5]"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {onBack && (
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 text-stone-600 font-bold mb-4 hover:text-stone-800 transition-colors focus:outline-none"
          whileHover={{ x: -2 }}
        >
          <ChevronLeft size={18} />
          Back
        </motion.button>
      )}
      <div className="grid grid-cols-2 gap-3">
        {availableDays.map((date) => (
          <motion.button
            key={date.toISOString()}
            onClick={() => onDateSelect(date)}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-3.5 rounded-[18px] border border-stone-200 hover:border-[#334155] hover:bg-stone-50 bg-white text-stone-700 hover:text-stone-900 font-semibold text-sm transition-all duration-200 shadow-sm focus:outline-none cursor-pointer text-center"
          >
            <div className="font-bold text-stone-800">
              {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
            <div className="text-xs text-stone-500 mt-1 font-semibold">
              {date.toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default DateSelector;
