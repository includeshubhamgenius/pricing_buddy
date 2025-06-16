import { motion } from "framer-motion";
import { FaHandshake, FaBriefcase, FaUserTie } from "react-icons/fa"; // Fiverr, Upwork, generic globe for Freelancer

const pricingData = [
  {
    platform: "Fiverr",
    priceRange: "$15 - $50 / hour",
    description: "Average rates for entry to mid-level freelancers.",
    url: "https://www.fiverr.com/",
    icon: <FaHandshake size={40} color="#1DBF73" />,
  },
  {
    platform: "Freelancer.com",
    priceRange: "$10 - $40 / hour",
    description: "Typical pricing for various freelance jobs.",
    url: "https://www.freelancer.com/",
    icon: <FaUserTie size={40} color="#3a99d8" />,
  },
  {
    platform: "Upwork",
    priceRange: "$20 - $60 / hour",
    description: "Popular platform with diverse pricing based on skill.",
    url: "https://www.upwork.com/",
    icon: <FaBriefcase size={40} color="#6fda44" />,
  },
];

export default function Pricing(){
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-[#003e39]">
      <h1 className="text-4xl font-bold mb-8 text-center">Freelance Hourly Rates</h1>
      <p className="text-center text-gray-700 mb-12">
        Typical hourly price ranges collected from popular freelance platforms.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingData.map(({ platform, priceRange, description, url, icon }) => (
          <motion.a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg cursor-pointer flex flex-col items-center text-center"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0, 62, 57, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4">{icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{platform}</h2>
            <p className="text-lg font-bold mb-1">{priceRange}</p>
            <p className="text-gray-600">{description}</p>
          </motion.a>
        ))}
      </div>
      <p className="mt-12 text-sm text-gray-500 text-center">
        * Pricing varies by skill, experience, and project type.
      </p>
    </div>
  );
};
