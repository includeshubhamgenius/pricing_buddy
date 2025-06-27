import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Calculator, 
  TrendingUp, 
  Shield, 
  Zap,
  ChevronDown,
  Users,
  DollarSign
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

const Button = ({ children, onClick, variant = "primary", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-200 ease-out transform cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-white/90 backdrop-blur-xl text-gray-700 border border-gray-200 hover:bg-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl"
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

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <Card delay={delay} className="p-8 text-center hover:shadow-2xl transition-all duration-300">
    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </Card>
);

const StatCard = ({ value, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="text-center"
  >
    <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
    <div className="text-sm text-gray-600 font-medium">{label}</div>
  </motion.div>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <Card className="overflow-hidden">
    <button
      onClick={onClick}
      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
    >
      <span className="font-semibold text-gray-900">{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </motion.div>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="px-8 pb-6 text-gray-600 leading-relaxed">
        {answer}
      </div>
    </motion.div>
  </Card>
);

const BlogCard = ({ title, excerpt, readTime, category, delay = 0 }) => (
  <Card delay={delay} className="p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
    <div className="flex items-center justify-between mb-4">
      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
        {category}
      </span>
      <span className="text-xs text-gray-500">{readTime} min read</span>
    </div>
    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
      {excerpt}
    </p>
    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
      Read more <ArrowRight className="w-4 h-4 ml-1" />
    </div>
  </Card>
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

  const handleCalculatorClick = () => {
    navigate('/calculator');
  };

  const handleHowItWorksClick = () => {
     navigate('/how-it-works');
  };

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
              Price with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Stop undervaluing your work. Get personalized hourly rates based on your skills, 
              expenses, and market position.
                        </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleCalculatorClick}>
                Launch Calculator
              </Button>
              <Button onClick={handleHowItWorksClick} variant="secondary">
                How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Freelancers Love Pricing Buddy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Calculator}
            title="Smart Calculator"
            description="Built with freelancing-specific logic to help you price accurately and confidently."
            delay={0.1}
          />
          <FeatureCard
            icon={TrendingUp}
            title="Market Awareness"
            description="Compare your rates with the industry to ensure you're staying competitive."
            delay={0.2}
          />
          <FeatureCard
            icon={Shield}
            title="Transparent & Secure"
            description="Your data stays private and we never share your info with anyone."
            delay={0.3}
          />
          <FeatureCard
            icon={Zap}
            title="Instant Results"
            description="No sign-ups needed. Get your pricing insights in seconds."
            delay={0.4}
          />
          <FeatureCard
            icon={Users}
            title="For All Freelancers"
            description="Supports multiple domains: design, dev, content, video, and more."
            delay={0.5}
          />
          <FeatureCard
            icon={DollarSign}
            title="Fair Valuation"
            description="Stop guessing your worth. Start charging what you truly deserve."
            delay={0.6}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Empowering Thousands of Freelancers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <StatCard value="25,000+" label="Calculations Done" delay={0.1} />
            <StatCard value="10,000+" label="Freelancers Served" delay={0.2} />
            <StatCard value="95%" label="Satisfaction Rate" delay={0.3} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === idx}
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Learn & Grow as a Freelancer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <BlogCard
              key={idx}
              title={blog.title}
              excerpt={blog.excerpt}
              readTime={blog.readTime}
              category={blog.category}
              delay={0.1 * idx}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pricing Buddy. All rights reserved.
      </footer>
    </div>
  );
}
