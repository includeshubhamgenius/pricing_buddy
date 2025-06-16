import React from "react";
import { motion } from "framer-motion";
import {
  FaCalculator,
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaCogs,
  FaFilePdf,
  FaMobileAlt,
  FaUserFriends,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCalculator size={30} color="#f5da2a" />,
    title: "Hourly Rate Calculator",
    description:
      "Helps freelancers price their services smartly by analyzing market rates and project scope.",
  },
  {
    icon: <FaBalanceScale size={30} color="#f5da2a" />,
    title: "Pricing Comparison",
    description:
      "Compares pricing data from major platforms like Fiverr, Upwork, and Freelancer to suggest competitive rates.",
  },
  {
    icon: <FaFileInvoiceDollar size={30} color="#f5da2a" />,
    title: "Quote Estimator",
    description:
      "Create accurate client quotes based on detailed project requirements and market insights.",
  },
  {
    icon: <FaCogs size={30} color="#f5da2a" />,
    title: "Pricing Breakdown Logic",
    description:
      "Transparent calculation method showing how Pricing Buddy determines suggested rates step-by-step.",
  },
  {
    icon: <FaFilePdf size={30} color="#f5da2a" />,
    title: "Save as PDF (future)",
    description: "Export your pricing reports and quotes as PDFs for easy sharing and record-keeping.",
  },
  {
    icon: <FaMobileAlt size={30} color="#f5da2a" />,
    title: "Responsive Design",
    description:
      "Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices.",
  },
  {
    icon: <FaUserFriends size={30} color="#f5da2a" />,
    title: "User-friendly UI",
    description:
      "Minimalistic and intuitive design focused on delivering an effortless user experience.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeOut", duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, boxShadow: "0 8px 20px rgba(245, 218, 42, 0.4)" },
};

export default function Features() {
  return (
    <div className="min-h-screen px-6 py-10 max-w-6xl mx-auto text-gray-900 font-sans">
      <motion.h1
        className="text-4xl font-bold mb-8 text-yellow-500 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Features
      </motion.h1>

      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map(({ icon, title, description }, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg p-6 cursor-pointer select-none border border-yellow-300 hover:border-yellow-500 transition-shadow"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="mb-4">{icon}</div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-yellow-500 text-center">
          Interactive Demo / Screenshots
        </h2>
        <div className="flex overflow-x-auto space-x-6 px-2 py-4">
          {/* Replace these empty divs with your screenshots or interactive demo */}
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="min-w-[280px] min-h-[180px] bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center text-gray-400 font-medium"
            >
              Screenshot {idx + 1}
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
