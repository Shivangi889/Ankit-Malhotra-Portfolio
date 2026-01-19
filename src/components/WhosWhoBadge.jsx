import React, { useState } from 'react';
import WhosWhoBadgeImg from "../assets/whoswhoinamerica_badge.png";

const WhosWhoBadge = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div 
        className="group relative"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className={`bg-white rounded-2xl shadow-xl border border-gray-200 hover:border-amber-300 transition-all duration-300 overflow-hidden ${isExpanded ? 'w-80 p-4' : 'w-20 p-3'}`}>
          <div className="flex items-start gap-4">
            {/* Badge Image */}
            <div className="flex-shrink-0">
              <img
                src={WhosWhoBadgeImg}
                alt="Marquis Who's Who in America 2025 Honored Listee Badge"
                className={`rounded-lg transition-transform duration-300 ${isExpanded ? 'w-20 h-20' : 'w-14 h-14'}`}
              />
            </div>
            
            {/* Description - Expands on Hover */}
            {isExpanded && (
              <div className="flex-1 min-w-0 animate-fadeIn">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Honored</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-xs text-gray-500 font-medium">2025</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-2">Who's Who in America</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Honored to be listed in <strong className="text-gray-800">Who's Who in America</strong>, recognizing prominent Americans since 1898.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhosWhoBadge;