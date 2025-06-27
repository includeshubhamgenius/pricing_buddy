import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Calculator,
  TrendingUp,
  FileText,
  Settings,
  Download,
  Smartphone,
  Users,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';

// Enhanced UI Components matching Calculator.jsx style
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

const FeatureCard = ({ icon: Icon, title, description, delay = 0, status = "available" }) => (
  <Card delay={delay} className="p-8 text-center hover:shadow-2xl transition-all duration-300 group">
    <div className="relative">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      {status === "coming-soon" && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          Soon
        </div>
      )}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
    {status === "available" && (
      <div className="mt-4 flex items-center justify-center text-green-600 text-sm font-medium">
        <CheckCircle className="w-4 h-4 mr-1" />
        Available Now
      </div>
    )}
  </Card>
);

const DemoSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        See It In Action
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        Experience the intuitive flow that helps thousands of freelancers price with confidence
      </motion.p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {[
        {
          step: "01",
          title: "Enter Your Goals",
          description: "Simply input your income targets and working hours",
          color: "from-blue-500 to-cyan-500"
        },
        {
          step: "02", 
          title: "Fine-tune Settings",
          description: "Adjust experience level and market positioning",
          color: "from-purple-500 to-pink-500"
        },
        {
          step: "03",
          title: "Get Your Rate",
          description: "Receive personalized pricing with detailed breakdown",
          color: "from-green-500 to-emerald-500"
        }
      ].map((item, idx) => (
        <Card key={idx} delay={0.1 * idx} className="p-8 text-center">
          <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg`}>
            {item.step}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </Card>
      ))}
    </div>

    {/* Interactive Demo Placeholder */}
    <Card className="p-12 text-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Zap className="w-10 h-10 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Interactive Demo Coming Soon
        </h3>
        <p className="text-gray-600 mb-8">
          We're working on an interactive walkthrough to show you exactly how Pricing Buddy works. 
          For now, try the calculator to experience the magic firsthand!
        </p>
        
      </div>
    </Card>
  </section>
);

export default function Features() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const navigate = useNavigate();


  const features = [
    {
      icon: Calculator,
      title: "Smart Rate Calculator",
      description: "Intelligent algorithm that factors in your goals, expenses, and market positioning to suggest optimal hourly rates.",
      status: "available"
    },
    {
      icon: TrendingUp,
      title: "Market Rate Comparison",
      description: "Compare your rates with industry standards across platforms like Fiverr, Upwork, and Freelancer for competitive positioning.",
      status: "available"
    },
    {
      icon: FileText,
      title: "Professional Quotes",
      description: "Generate client-ready quotes based on your calculated rates and project requirements with detailed breakdowns.",
      status: "coming-soon"
    },
    {
      icon: Settings,
      title: "Advanced Customization",
      description: "Fine-tune calculations with experience multipliers, confidence buffers, and field-specific market rates.",
      status: "available"
    },
    {
      icon: Download,
      title: "Export & Save",
      description: "Save your pricing reports and client quotes as professional PDFs for easy sharing and record-keeping.",
      status: "coming-soon"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Seamlessly calculate rates on any device with our responsive design that works perfectly on mobile and desktop.",
      status: "available"
    },
    {
      icon: Users,
      title: "Freelancer-First Design",
      description: "Built specifically for freelancers by understanding the unique challenges of independent work and pricing.",
      status: "available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Powerful
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Features</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Everything you need to price your freelance work confidently and professionally
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * idx}
              status={feature.status}
            />
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Price Like a Pro?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of freelancers who've discovered their true worth
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/calculator')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Calculating
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pricing Buddy. All rights reserved.
      </footer>
    </div>
  );
}