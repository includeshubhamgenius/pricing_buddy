import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Calculator,
  TrendingUp,
  FileText,
  Settings,
  Download,
  Smartphone,
  Users,
  CheckCircle
} from 'lucide-react';

// Glassmorphic Card
const GlassCard = ({ children, className = "", delay = 0, accent = "from-blue-400 to-purple-400" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    className={`relative bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg rounded-3xl p-8 ${className}`}
    style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
  >
    <div className={`absolute  left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${accent} opacity-80 blur-lg rounded-full z-0`}></div>
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const features = [
  {
    icon: Calculator,
    title: "Smart Rate Calculator",
    description: "Get optimal hourly rates based on your goals and market.",
    accent: "from-blue-400 to-purple-400"
  },
  {
    icon: TrendingUp,
    title: "Market Comparison",
    description: "See how your rates stack up against the industry.",
    accent: "from-pink-400 to-orange-400"
  },
  {
    icon: FileText,
    title: "Professional Quotes",
    description: "Generate client-ready quotes instantly.",
    accent: "from-green-400 to-teal-400"
  },
  {
    icon: Settings,
    title: "Customization",
    description: "Fine-tune with experience and market multipliers.",
    accent: "from-yellow-400 to-orange-400"
  },
  {
    icon: Download,
    title: "Export & Save",
    description: "Save your pricing reports as PDFs.",
    accent: "from-purple-400 to-blue-400"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Works perfectly on any device.",
    accent: "from-cyan-400 to-blue-400"
  },
  {
    icon: Users,
    title: "Freelancer-First",
    description: "Designed for freelancers, by freelancers.",
    accent: "from-fuchsia-400 to-pink-400"
  }
];

export default function Features() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-32 pb-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight text-center"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto text-center mb-2"
        >
          Everything you need to price your freelance work confidently.
        </motion.p>
      </section>

      {/* Features Grid */}
      <section className="flex-1 px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
  const isComingSoon =
    feature.title === "Export & Save" || feature.title === "Professional Quotes";

  return (
    <GlassCard key={idx} delay={0.1 * idx} accent={feature.accent}>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 flex items-center justify-center mb-4 rounded-2xl bg-white/60 shadow-inner">
          <feature.icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{feature.title}</h3>
        <p className="text-gray-600 text-center text-base mb-2">{feature.description}</p>
        <div className={`mt-2 flex items-center justify-center text-xs font-medium ${
          isComingSoon ? 'text-yellow-600' : 'text-green-600'
        }`}>
          <CheckCircle className="w-4 h-4 mr-1" />
          {isComingSoon ? "Coming Soon" : "Available"}
        </div>
      </div>
    </GlassCard>
  );
})}

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 flex flex-col items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/calculator')}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Start Calculating
        </motion.button>
        <div className="mt-8 text-gray-400 text-xs">© {new Date().getFullYear()} Pricing Buddy</div>
      </section>
    </div>
  );
}