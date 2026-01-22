import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className={`border-b border-gray-100 dark:border-gray-800 last:border-0 transition-all duration-300 ${isOpen ? 'bg-green-50/30 dark:bg-green-900/10' : ''}`}>
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center py-5 px-4 text-left focus:outline-none group"
      >
        <span className={`font-bold transition-colors duration-300 ${isOpen ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-200 group-hover:text-green-500'}`}>
          {question}
        </span>
        <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${isOpen ? 'bg-green-600 text-white rotate-180' : 'bg-gray-100 dark:bg-gray-800 text-green-600'}`}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          )}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How can I find a study partner?",
      answer: "Use the 'Find Partners' section to search by subject or skill level. Our platform uses smart matching to suggest partners with similar goals and availability.",
    },
    {
      question: "Is registration required to send requests?",
      answer: "Yes, to ensure a safe learning community, you must create an account. This allows you to track your connections and view your partner request history in 'My Connections'.",
    },
    {
      question: "How does the rating system work?",
      answer: "Profiles are ranked based on user feedback. Highly rated partners appear on the Home Page 'Top Partners' section. You can build your rating by being reliable and helpful.",
    },
    {
      question: "Can I edit my partner profile after creating it?",
      answer: "Absolutely! Go to the 'My Connections' page where you can find an 'Update' button to modify your subject, study mode, or availability at any time.",
    },
    {
      question: "What happens when I send a partner request?",
      answer: "The partner's 'Connection Count' will instantly increase. The request details are saved in our database, and you can manage all your active requests from your dashboard.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h4 className="text-green-600 font-bold uppercase tracking-widest text-xs mb-2">Support Center</h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Common <span className="text-green-600">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQ Container */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none rounded-2xl overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              toggleOpen={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;