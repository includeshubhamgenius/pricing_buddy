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
  {
    question: "Can I share my quote with clients?",
    answer: "Yes, you can copy or download a clean version to share professionally.",
  },
  {
    question: "Do I need to sign up?",
    answer: "No signup required — just open the tool and start estimating.",
  },
  {
    question: "Is the AI model trained on real data?",
    answer: "Yes, it's trained on real-world freelance project data and continuously improving.",
  },
  {
    question: "Does it work for all industries?",
    answer: "It's optimized for tech, design, writing, and marketing freelancers — more coming soon.",
  },
  {
    question: "Can I customize the widget for my website?",
    answer: "Yes, an embeddable and brand-customizable widget is coming soon.",
  },
  {
    question: "How accurate are the market-based suggestions?",
    answer: "We use the latest regional data and freelance platforms to stay relevant and reliable.",
  },
  {
    question: "Will this remain free forever?",
    answer: "The core tool will always be free. Premium features may be added in the future.",
  }
];


const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-2xl mx-auto p-6">

      <h3 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions (FAQs) </h3>
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
