import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { timeSlots, dayNameMap } from '../../Data/timeSlots';

const TimeSlotSelector = ({ selectedDate, onTimeSlotSelect, onBack, bookedSlots = [], isLoading = false }) => {
  if (!selectedDate) {
    return null;
  }

  const dateObj = new Date(selectedDate);
  const dayOfWeek = dateObj.getDay();
  const dayName = dayNameMap[dayOfWeek];
  const availableSlotsForDay = timeSlots[dayName] || [];

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
    animate: { opacity: 1, y: 0 }
  };

  const isSlotBooked = (time) => {
    return bookedSlots?.includes(time) || false;
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
          Change Date
        </motion.button>
      )}
      
      <p className="text-stone-600 text-sm mb-4 font-bold">
        Available slots for {dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}:
      </p>

      {availableSlotsForDay.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {availableSlotsForDay.map((slot) => {
            const booked = isSlotBooked(slot.time);
            return (
              <motion.button
                key={slot.id}
                onClick={() => !booked && !isLoading && onTimeSlotSelect(slot.time)}
                disabled={booked || isLoading}
                variants={itemVariants}
                whileHover={!booked ? { scale: 1.02 } : {}}
                whileTap={!booked ? { scale: 0.98 } : {}}
                className={`px-4 py-3.5 rounded-[18px] font-bold text-sm transition-all duration-200 border focus:outline-none shadow-sm cursor-pointer ${
                  booked
                    ? 'border-red-150 bg-red-50/50 text-red-400 cursor-not-allowed opacity-60'
                    : 'border-stone-200 hover:border-[#334155] hover:bg-stone-50 bg-white text-stone-700 hover:text-stone-900'
                }`}
              >
                <div>{slot.time}</div>
                {booked && <div className="text-[10px] mt-0.5 font-bold">Booked</div>}
              </motion.button>
            );
          })}
        </div>
      ) : (
        <p className="text-stone-500 text-sm font-semibold">No available slots for this day.</p>
      )}
    </motion.div>
  );
};

export default TimeSlotSelector;
