import React from 'react';
import { X } from 'lucide-react';

export const InfoModal = ({ title, content, image, onClose }) => {
    // Format content to handle line breaks and bullet points
    const formatContent = (text) => {
        return text.split('\n').map((line, index) => {
            if (line.trim().startsWith('-')) {
                return (
                    <li key={index} className="ml-4 mb-2 text-slate-100">
                        {line.trim().substring(1).trim()}
                    </li>
                );
            }
            return line.trim() ? (
                <p key={index} className="mb-4 text-slate-200 leading-relaxed">
                    {line.trim()}
                </p>
            ) : null;
        });
    };

    return (
        <div className="fixed inset-0 bg-red backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-black rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-slate-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
                    >
                        <X className="w-6 h-6 text-slate-100" />
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                        {/* Image */}
                        <div className="lg:order-first">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="space-y-4">
                            <div className="text-lg">
                                {formatContent(content)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
