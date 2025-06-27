import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  Settings, 
  PieChart, 
  FileText,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';

// Enhanced UI Components matching Calculator.jsx and Home.jsx style
const Card = ({ children, className = "", delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 ${className}`}
  >
    {children}
  </motion.div>
);

const Button = ({ children, onClick, variant = "primary", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-200 ease-out transform cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-white/90 backdrop-blur-xl text-gray-700 border border-gray-200 hover:bg-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const StepCard = ({ icon: Icon, title, description, stepNumber, delay = 0, isComingSoon = false }) => (
  <Card delay={delay} className="p-8 text-center hover:shadow-2xl transition-all duration-300 group">
    <div className="relative mb-6">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
        <Icon className="w-10 h-10 text-blue-600" />
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
        {stepNumber}
      </div>
      {isComingSoon && (
        <div className="absolute -top-1 -left-1 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">
          Soon
        </div>
      )}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </Card>
);

const FeatureHighlight = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-100/50"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function HowItWorks() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    navigate('/calculator');
  };

  const steps = [
    {
      icon: Calculator,
      title: "Smart Rate Estimation",
      description: "Answer intuitive questions about your work, monthly expenses, and income expectations. Our algorithm considers your unique situation.",
      stepNumber: 1
    },
    {
      icon: Settings,
      title: "Personalize Your Profile",
      description: "Fine-tune factors like working hours, experience level, and confidence buffer to get a rate that truly reflects your worth.",
      stepNumber: 2
    },
    {
      icon: PieChart,
      title: "Detailed Breakdown",
      description: "See exactly how your rate is calculated with transparent breakdowns of expenses, profit margins, and market positioning.",
      stepNumber: 3
    },
    {
      icon: FileText,
      title: "Export & Share",
      description: "Download your pricing strategy as a professional PDF to share with clients, mentors, or keep for your records.",
      stepNumber: 4,
      isComingSoon: true
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Industry-Specific Intelligence",
      description: "Pre-loaded market rates for web development, design, content writing, and more specialized fields."
    },
    {
      icon: Target,
      title: "Goal-Oriented Pricing",
      description: "Set your lifestyle and financial goals, and we'll help you price to achieve them sustainably."
    },
    {
      icon: TrendingUp,
      title: "Growth-Ready Rates",
      description: "Build in room for skill development and market changes so your rates grow with your expertise."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              How Pricing Buddy
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Works</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              A smart, transparent approach to freelance pricing that puts you in control of your financial future.
            </p>
            <Button onClick={handleTryNowClick}>Try It Now</Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Steps Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Four Simple Steps to Fair Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From confused about rates to confident in your worth — in just minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={step.stepNumber}
              delay={0.1 * index}
              isComingSoon={step.isComingSoon}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Real Freelancers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every feature is designed around the real challenges freelancers face when pricing their work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureHighlight
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Visualization */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <Card className="p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Science Behind Your Rate
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              We combine your cost of living, working hours, target income, and market benchmarks using proven economic formulas. No guesswork—just numbers.
            </p>
            <Button onClick={handleTryNowClick}>Start Calculating</Button>
          </motion.div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pricing Buddy. All rights reserved.
      </footer>
    </div>
  );
}
