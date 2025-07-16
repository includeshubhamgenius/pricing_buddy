import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import EnhancedFAQSection from './EnhancedFAQSection'
import Blogs from './Blogs'
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Calculator, 
  TrendingUp, 
  Shield, 
  Zap,
  Users,
  DollarSign,
  Star,
  Sparkles,
  Award
} from 'lucide-react';

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
      />

      

     

      
    </div>
  );
};

// Enhanced UI Components
const Card = ({ children, className = "", delay = 0, hover = true }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    whileHover={hover ? { y: -5, scale: 1.02 } : {}}
    className={`bg-gradient-to-br from-white via-blue-50 to-purple-100/80 rounded-3xl shadow-xl border border-blue-100/60 hover:shadow-2xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const Button = ({ children, onClick, variant = "primary", className = "", size = "default", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-200 ease-out transform cursor-pointer relative overflow-hidden";
  
  const sizes = {
    small: "px-6 py-3 text-sm",
    default: "px-8 py-4 text-base",
    large: "px-10 py-5 text-lg"
  };
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
    secondary: "bg-white/95 backdrop-blur-xl text-gray-700 border border-gray-200/50 hover:bg-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] hover:border-blue-200",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 rounded-xl backdrop-blur-sm"
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const FeatureCard = ({ icon: Icon, title, description, gradient = "from-blue-500 to-purple-500" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="relative p-8 text-center group cursor-pointer"
  >
    {/* Glass morphic background */}
    <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500" />
    
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/30 group-hover:via-purple-50/20 group-hover:to-pink-50/30 rounded-3xl transition-all duration-500" />
    
    {/* Subtle border glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-pink-400/20 rounded-3xl blur-xl transition-all duration-500" />
    
    {/* Content */}
    <div className="relative z-10">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>
    </div>
  </motion.div>
);

const StatCard = ({ value, label, delay = 0, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="text-center group"
  >
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-4 border border-blue-100/50"
    >
      {Icon && <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />}
      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </motion.div>
  </motion.div>
);


// Trust Badge Component
const TrustBadge = ({ icon: Icon, text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex items-center gap-2 bg-white/80 backdrop-blur-xl rounded-lg px-3 py-2 shadow-lg border border-white/30"
  >
    <Icon className="w-4 h-4 text-blue-600" />
    <span className="text-xs font-medium text-gray-700">{text}</span>
  </motion.div>
);

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How accurate is the pricing calculation?",
      answer: "Our calculator uses industry-standard formulas and market data to provide estimates. However, final pricing should always consider your unique circumstances, client relationships, and market conditions."
    },
    {
      question: "Is Pricing Buddy free to use?",
      answer: "Yes! Pricing Buddy is completely free to use. We believe every freelancer should have access to fair pricing tools regardless of their budget."
    },
    {
      question: "What fields does it support?",
      answer: "We support major freelancing fields including web development, graphic design, content writing, video editing, and more. You can also input custom market rates for specialized fields."
    },
    {
      question: "How often should I recalculate my rates?",
      answer: "We recommend reviewing your rates every 3-6 months or whenever your expenses, skills, or market conditions change significantly."
    }
  ];

  const blogs = [
    {
      title: "The Psychology of Pricing: Why Freelancers Undervalue Themselves",
      excerpt: "Understanding the mental barriers that prevent freelancers from charging their worth and how to overcome them.",
      readTime: 5,
      category: "Psychology"
    },
    {
      title: "Market Research for Freelancers: Finding Your Competitive Edge",
      excerpt: "Learn how to research your competition and position yourself strategically in the freelance market.",
      readTime: 7,
      category: "Strategy"
    },
    {
      title: "Beyond Hourly: Alternative Pricing Models for Freelancers",
      excerpt: "Explore value-based pricing, project pricing, and retainer models that can boost your income.",
      readTime: 6,
      category: "Pricing"
    }
  ];

  const features = [
    {
      icon: Calculator,
      title: "Smart Calculator",
      description: "Built with freelancing-specific logic to help you price accurately and confidently.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Market Awareness",
      description: "Compare your rates with the industry to ensure you're staying competitive.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Transparent & Secure",
      description: "Your data stays private and we never share your info with anyone.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "No sign-ups needed. Get your pricing insights in seconds.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "For All Freelancers",
      description: "Supports multiple domains: design, dev, content, video, and more.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: DollarSign,
      title: "Fair Valuation",
      description: "Stop guessing your worth. Start charging what you truly deserve.",
      gradient: "from-emerald-500 to-blue-500"
    }
  ];

  const stats = [
    { value: "25,000+", label: "Calculations Done", icon: Calculator },
    { value: "10,000+", label: "Freelancers Served", icon: Users },
    { value: "95%", label: "Satisfaction Rate", icon: Star }
  ];

  const handleCalculatorClick = () => {
    navigate('/calculator');
  };

  const handleHowItWorksClick = () => {
    navigate('/how-it-works');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
      >
        {/* Dynamic Background (Hero Only) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-pink-100/20 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.15),transparent_50%),radial-gradient(ellipse_at_center,rgba(236,72,153,0.1),transparent_70%)]" />
        <FloatingElements />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full mb-8 border border-blue-200/50 backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Trusted by 10,000+ freelancers</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 mt-6 tracking-tight">
              Price with
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Stop undervaluing your work. Get personalized hourly rates based on your skills, 
              expenses, and market position.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button onClick={handleCalculatorClick} size="default">
                <Calculator className="w-5 h-5 mr-2" />
                Launch Calculator
              </Button>
              <Button onClick={handleHowItWorksClick} variant="secondary" size="default">
                How It Works
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <TrustBadge icon={Shield} text="100% Private & Secure" delay={0.3} />
              <TrustBadge icon={Zap} text="Instant Results" delay={0.4} />
              <TrustBadge icon={Award} text="Industry Trusted" delay={0.5} />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Freelancers Love Pricing Buddy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed specifically for modern freelancers
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={0.1 * idx}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl backdrop-blur-xl border border-white/20" />
          
          <div className="relative z-10 text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Empowering Thousands of Freelancers
              </h2>
              <p className="text-xl text-gray-600">
                Join the community of successful freelancers
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <StatCard 
                  key={idx}
                  value={stat.value} 
                  label={stat.label} 
                  icon={stat.icon}
                  delay={0.1 * idx} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 w-full relative z-10">
       <EnhancedFAQSection/>
      </section>

      {/* Blog Section */}
      <section className="py-24 w-full relative z-10">
        <Blogs/>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm relative z-10 border-t border-gray-200/50 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Calculator className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-700">Pricing Buddy</span>
          </div>
          <p>© {new Date().getFullYear()} Pricing Buddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}