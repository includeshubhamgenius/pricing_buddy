
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <button
          onClick={onClick}
          className="w-full px-8 py-6 text-left flex items-center justify-between relative z-10 group-hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {question}
            </h3>
          </div>
          
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-300" />
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-6 relative z-10">
                <div className="pl-14">
                  <div className="w-full h-px bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 mb-4" />
                  <p className="text-gray-700 leading-relaxed">
                    {answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const EnhancedFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How does Pricing Buddy determine the optimal price?",
      answer: "Pricing Buddy uses advanced AI algorithms that analyze market trends, competitor pricing, demand patterns, and your business metrics to suggest the most profitable price points for your products or services."
    },
    {
      question: "Can I integrate Pricing Buddy with my existing e-commerce platform?",
      answer: "Yes! Pricing Buddy offers seamless integrations with popular platforms like Shopify, WooCommerce, Magento, and custom APIs. Our team provides full support during the integration process."
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to get started, and you can cancel anytime during the trial period."
    },
    {
      question: "How often are pricing recommendations updated?",
      answer: "Our AI continuously monitors market conditions and updates recommendations in real-time. You can set automated pricing rules or choose to review and approve changes manually."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support via chat, email, and phone. Our team includes pricing experts who can help you optimize your strategy and maximize your revenue potential."
    }
  ];

  return (
    <section className="py-24 px-6 w-full relative z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-purple-50/20 to-pink-50/30 rounded-3xl" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-16 right-16 opacity-20"
      >
        <Sparkles className="w-8 h-8 text-purple-500" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-16 left-16 opacity-20"
      >
        <Sparkles className="w-6 h-6 text-blue-500" />
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-purple-800">Got Questions?</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Frequently Asked
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about Pricing Buddy to make informed decisions
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="space-y-6 relative z-10">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={idx}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFAQ === idx}
            onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            index={idx}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-16 relative z-10"
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">
            Our team is here to help you succeed. Get in touch and we'll answer any questions you have.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Support
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedFAQSection;