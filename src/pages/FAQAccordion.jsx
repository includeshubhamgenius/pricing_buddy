// FAQAccordion.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do you calculate pricing?",
    answer: "Based on estimated hours × hourly rate × complexity × experience.",
  },
  {
    question: "What if I don’t know my hourly rate?",
    answer: "We help you estimate it based on market and skill level.",
  },
  {
    question: "Is this tool free?",
    answer: "Yes, it's 100% free for freelancers.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className="border border-gray-200 rounded-xl p-4 cursor-pointer bg-white shadow-sm"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium text-gray-900">{faq.question}</p>
              <span className="text-gray-500 text-lg">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mt-2"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQAccordion;
