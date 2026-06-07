import { motion } from 'framer-motion';
import { X, Bot } from 'lucide-react';

const stepsConfig = [
  { label: 'Topic', key: 'topic' },
  { label: 'Details', key: 'details' },
  { label: 'Schedule', key: 'schedule' },
  { label: 'Confirm', key: 'confirm' }
];

const getActiveStepIndex = (step, STEPS) => {
  if (!step || !STEPS) return 0;
  switch (step) {
    case STEPS.GREETING:
    case STEPS.SERVICE_SELECTION:
      return 0;
    case STEPS.NAME_INPUT:
    case STEPS.EMAIL_INPUT:
    case STEPS.NOTES_INPUT:
      return 1;
    case STEPS.DATE_SELECTION:
    case STEPS.TIME_SELECTION:
      return 2;
    case STEPS.SUMMARY:
    case STEPS.SUCCESS:
      return 3;
    default:
      return 0;
  }
};

const ChatHeader = ({ onClose, currentStep, STEPS }) => {
  const activeIndex = getActiveStepIndex(currentStep, STEPS);

  return (
    <motion.div
      className="bg-[#EAE6E1] text-[#334155] border-b border-stone-200/60 px-6 pt-5 pb-4 flex flex-col md:rounded-t-[32px] z-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          
          <motion.div
            className="w-10 h-10 rounded-full bg-[#edf5fa] border border-stone-200 flex items-center justify-center text-lg shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Bot className="text-[#334155]" size={20} />
          </motion.div>
          <div>
            <h3 className="font-bold text-base text-[#334155]">Blueprint Studio</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[11px] font-semibold text-stone-500">Collaborative Brainstormer</p>
            </div>
          </div>
        </div>
        <motion.button
          onClick={onClose}
          className="p-2 hover:bg-stone-200/50 rounded-full transition-all duration-200 text-stone-500 hover:text-stone-800 focus:outline-none"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={20} />
        </motion.button>
      </div>

      {/* Progress Map */}
      <div className="w-full flex items-center justify-between mt-5 px-1">
        {stepsConfig.map((item, idx) => {
          const isActive = idx <= activeIndex;
          const isCurrent = idx === activeIndex;
          return (
            <div key={item.key} className="flex-1 flex flex-col items-center relative">
              {/* Connector Line */}
              {idx > 0 && (
                <div
                  className={`absolute top-2 left-[-50%] right-[50%] h-[2px] z-0 transition-colors duration-300 ${
                    idx <= activeIndex ? 'bg-[#334155]' : 'bg-stone-300'
                  }`}
                />
              )}
              {/* Step Dot */}
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${
                  isCurrent
                    ? 'bg-[#FAF8F5] border-[#334155] scale-110 shadow-sm'
                    : isActive
                      ? 'bg-[#334155] border-[#334155]'
                      : 'bg-[#EAE6E1] border-stone-300'
                }`}
              >
                {isActive && idx < activeIndex && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </div>
              {/* Step Label */}
              <span
                className={`text-[10px] mt-1.5 font-bold transition-colors duration-300 ${
                  isActive ? 'text-[#334155]' : 'text-stone-400'
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ChatHeader;

