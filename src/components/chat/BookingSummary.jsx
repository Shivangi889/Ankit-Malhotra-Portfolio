import { motion } from 'framer-motion';
import { Edit2 } from 'lucide-react';
import { consultationOptions } from '../../Data/consultationOptions';

const BookingSummary = ({ formData, onEdit, onConfirm, isLoading }) => {
  const serviceOption = consultationOptions.find(opt => opt.id === formData.service);

  const itemVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 }
  };

  const formattedDate = formData.date 
    ? new Date(formData.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    : '';

  return (
    <motion.div
      className="px-6 py-5 space-y-4 bg-[#FAF8F5]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Summary Items as a Blueprint Draft */}
      <motion.div
        className="space-y-3 bg-white rounded-[24px] p-5 border border-stone-200 shadow-sm"
        variants={itemVariants}
      >
        <div className="flex justify-between items-start gap-4">
          <span className="text-stone-500 text-xs font-bold uppercase tracking-wider">Service:</span>
          <span className="text-stone-800 font-bold text-sm text-right">{serviceOption?.label}</span>
        </div>

        <div className="border-t border-stone-100"></div>

        <div className="flex justify-between items-start gap-4">
          <span className="text-stone-500 text-xs font-bold uppercase tracking-wider">Name:</span>
          <span className="text-stone-800 font-bold text-sm text-right">{formData.name}</span>
        </div>

        <div className="border-t border-stone-100"></div>

        <div className="flex justify-between items-start gap-4">
          <span className="text-stone-500 text-xs font-bold uppercase tracking-wider">Email:</span>
          <span className="text-stone-800 font-bold text-sm text-right break-all">{formData.email}</span>
        </div>

        <div className="border-t border-stone-100"></div>

        <div className="flex justify-between items-start gap-4">
          <span className="text-stone-500 text-xs font-bold uppercase tracking-wider">Date:</span>
          <span className="text-stone-800 font-bold text-sm text-right">
            {formattedDate}
          </span>
        </div>

        <div className="border-t border-stone-100"></div>

        <div className="flex justify-between items-start gap-4">
          <span className="text-stone-500 text-xs font-bold uppercase tracking-wider">Time Slot:</span>
          <span className="text-stone-800 font-bold text-sm text-right">{formData.timeSlot}</span>
        </div>

        {formData.notes && (
          <>
            <div className="border-t border-stone-100"></div>
            <div className="flex flex-col gap-1 items-start">
              <span className="text-stone-500 text-xs font-bold uppercase tracking-wider">Notes:</span>
              <span className="text-stone-700 font-semibold text-xs leading-relaxed text-left mt-1">{formData.notes}</span>
            </div>
          </>
        )}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.button
          onClick={onEdit}
          disabled={isLoading}
          whileHover={!isLoading ? { scale: 1.02 } : {}}
          whileTap={!isLoading ? { scale: 0.98 } : {}}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-stone-300 text-stone-700 font-bold hover:bg-stone-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none cursor-pointer"
        >
          <Edit2 size={16} />
          Edit
        </motion.button>

        <motion.button
          onClick={onConfirm}
          disabled={isLoading}
          whileHover={!isLoading ? { scale: 1.02 } : {}}
          whileTap={!isLoading ? { scale: 0.98 } : {}}
          className="flex-1 px-5 py-3 rounded-full bg-[#334155] hover:bg-[#1E293B] text-white font-bold shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none cursor-pointer"
        >
          {isLoading ? 'Confirming...' : 'Confirm Booking'}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default BookingSummary;
