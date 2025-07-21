import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does integration take?",
      answer: "Most developers integrate adpocket.ai in under 30 minutes with our lightweight SDK.",
    },
    {
      question: "Is there any revenue share?",
      answer: "We work on a transparent revenue share model. No hidden fees.",
    },
    {
      question: "Which ad networks do you support?",
      answer: "We partner with over 30 top-tier networks including Google, Meta, and AppLovin.",
    },
    {
      question: "Is my user data safe?",
      answer: "Absolutely. We are fully GDPR and CCPA compliant with strict data policies.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Custom chevron icon component
  const ChevronIcon = ({ isOpen }) => (
    <motion.svg
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-5 h-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </motion.svg>
  );

  return (
    <section className="py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-700  bg-gray-800/50 backdrop-blur overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-6 font-semibold text-lg flex justify-between items-center text-white hover:bg-gray-800/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  <ChevronIcon isOpen={openIndex === index} />
                </div>
              </button>
              
              <AnimatePresence mode="wait">
                {openIndex === index && (
                  <motion.div
                    key={`content-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto",
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ delay: 0.05, duration: 0.2 }}
                      className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-gray-700/50"
                    >
                      <div className="pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
