import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, MessagesSquare } from 'lucide-react';
import { faqData } from '../data/hospitalData';

export default function FAQs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <section className="py-20 bg-white relative font-sans" id="faqs-section">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-[#0A3D91] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Common Inquiries
          </span>
          <h2 className="text-3xl font-extrabold text-[#011438] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
            Quickly locate relevant answers to consultation schedules, walk-in protocols, clinical coverage, and HMO registration.
          </p>
        </div>

        {/* FAQs Accordion Cards Grid */}
        <div className="space-y-4" id="faqs-accordion-block">
          {faqData.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={faq.question}
                className={`bg-gray-50/50 border rounded-2xl overflow-hidden transition-all ${
                  isExpanded 
                    ? 'border-[#0A3D91]/25 bg-white shadow-md' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                {/* trigger banner header */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isExpanded 
                        ? 'bg-[#0A3D91] text-white' 
                        : 'bg-blue-50 text-[#0A3D91] group-hover:bg-[#0A3D91]/20'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm md:text-base tracking-tight leading-normal font-sans group-hover:text-[#0A3D91] transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 group-hover:text-gray-700 transition-colors" />
                    )}
                  </div>
                </button>

                {/* Body expanded content details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-6 pt-0 border-t border-gray-50 text-gray-600 text-xs md:text-sm leading-relaxed font-sans font-medium space-y-4">
                        <p>{faq.answer}</p>
                        <div className="flex items-center space-x-2 text-[10px] uppercase font-mono text-emerald-600">
                          <span>Verified FAQ Category:</span>
                          <span className="bg-emerald-100 px-2 py-0.5 rounded-sm font-bold">{faq.category} Operations</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* More support questions card info */}
        <div className="mt-12 bg-linear-to-b from-gray-50/50 to-white border border-gray-100 rounded-2xl p-6 text-center space-y-3" id="faqs-need-support-box">
          <div className="w-10 h-10 bg-[#00A884]/15 rounded-xl flex items-center justify-center mx-auto text-[#00A884]">
            <MessagesSquare className="w-5 h-5" />
          </div>
          <span className="block text-gray-800 font-bold text-sm">Still have a clinical or structural question?</span>
          <p className="text-gray-500 text-xs max-w-lg mx-auto leading-relaxed">
            Our active front desk, consulting operators, and registration scientists are fully available. Chat directly via our live WhatsApp support.
          </p>
          <a
            href="https://wa.me/2348156007000"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="inline-flex items-center space-x-1.5 text-[#0A3D91] hover:text-[#00A884] font-bold text-xs"
          >
            <span>Initiate WhatsApp Help Support</span>
            <span className="font-mono">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
