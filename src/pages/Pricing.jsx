import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ArrowRight,
  Star,
  Award,
  Target
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

const PlatformCard = ({ platform, priceRange, description, url, color, popularity, difficulty, delay = 0 }) => (
  <Card delay={delay} className="p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
    <div className="flex items-start justify-between mb-6">
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <DollarSign className="w-8 h-8 text-white" />
      </div>
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
      >
        <ExternalLink className="w-5 h-5 text-gray-600" />
      </motion.a>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
      {platform}
    </h3>
    
    <div className="text-3xl font-bold text-blue-600 mb-4">
      {priceRange}
    </div>
    
    <p className="text-gray-600 leading-relaxed mb-6">
      {description}
    </p>

    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 font-medium">Popularity</span>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < popularity ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 font-medium">Entry Difficulty</span>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full ${i < difficulty ? 'bg-orange-400' : 'bg-gray-300'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  </Card>
);

const InsightCard = ({ icon: Icon, title, stat, description, delay = 0 }) => (
  <Card delay={delay} className="p-6 text-center">
    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div className="text-2xl font-bold text-gray-900 mb-1">{stat}</div>
    <div className="text-sm font-semibold text-gray-700 mb-2">{title}</div>
    <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
  </Card>
);

const TipCard = ({ tip, delay = 0 }) => (
  <Card delay={delay} className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
    <div className="flex items-start space-x-3">
      <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
        <Target className="w-4 h-4 text-white" />
      </div>
      <p className="text-gray-700 leading-relaxed">{tip}</p>
    </div>
  </Card>
);

export default function Pricing() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const navigate = useNavigate();


  const platformData = [
    {
      platform: "Fiverr",
      priceRange: "$15 - $50",
      description: "Great for beginners with gig-based pricing. Start small and build your reputation with competitive rates.",
      url: "https://www.fiverr.com/",
      color: "from-green-500 to-emerald-600",
      popularity: 5,
      difficulty: 2
    },
    {
      platform: "Upwork",
      priceRange: "$20 - $60", 
      description: "Professional platform with diverse opportunities. Higher rates possible with strong proposals and portfolio.",
      url: "https://www.upwork.com/",
      color: "from-blue-500 to-blue-600",
      popularity: 5,
      difficulty: 4
    },
    {
      platform: "Freelancer",
      priceRange: "$10 - $40",
      description: "Competitive bidding environment. Lower entry barrier but requires strategic pricing to win projects.",
      url: "https://www.freelancer.com/",
      color: "from-purple-500 to-purple-600",
      popularity: 4,
      difficulty: 3
    }
  ];

  const insights = [
    {
      icon: TrendingUp,
      title: "Average Growth",
      stat: "35%",
      description: "Freelancers typically increase rates by 35% in their first year"
    },
    {
      icon: Users,
      title: "Active Freelancers",
      stat: "57M+",
      description: "Global freelance workforce continues to grow annually"
    },
    {
      icon: Award,
      title: "Top Earners Range",
      stat: "$75-150",
      description: "Experienced specialists command premium hourly rates"
    }
  ];

  const pricingTips = [
    "Start 10-20% below market rate initially, then increase as you gain reviews and experience.",
    "Research your specific niche deeply - rates vary significantly between web development, design, and writing.",
    "Consider your location's cost of living, but don't undervalue yourself in the global market.",
    "Bundle services or offer packages to increase your effective hourly rate.",
    "Track your actual time spent on projects to ensure your rates cover all work, including revisions.",
    "Raise your rates every 6-12 months as your skills and portfolio improve."
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
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200 rounded-full blur-3xl"></div>
          <div className="absolute  -left-32 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Market
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Understand current freelance market rates across popular platforms and price competitively
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Market Insights */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Market Overview
          </h2>
          <p className="text-xl text-gray-600">
            Key statistics from the global freelance market
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, idx) => (
            <InsightCard
              key={idx}
              icon={insight.icon}
              title={insight.title}
              stat={insight.stat}
              description={insight.description}
              delay={0.1 * idx}
            />
          ))}
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Platform Comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hourly rate ranges and platform characteristics to help you choose the right marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {platformData.map((platform, idx) => (
            <PlatformCard
              key={idx}
              platform={platform.platform}
              priceRange={platform.priceRange}
              description={platform.description}
              url={platform.url}
              color={platform.color}
              popularity={platform.popularity}
              difficulty={platform.difficulty}
              delay={0.1 * idx}
            />
          ))}
        </div>

        <Card className="p-8 text-center bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              💡 Pro Tip
            </h3>
            <p className="text-gray-700 leading-relaxed">
              These are general ranges. Your actual rates should reflect your specific skills, experience, 
              and the value you provide. Use our calculator to find your personalized rate based on your unique situation.
            </p>
          </div>
        </Card>
      </section>

      {/* Pricing Strategy Tips */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Pricing Strategies
          </h2>
          <p className="text-xl text-gray-600">
            Expert tips to help you price strategically and grow your freelance business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingTips.map((tip, idx) => (
            <TipCard key={idx} tip={tip} delay={0.1 * idx} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Find Your Perfect Rate?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Use our intelligent calculator to determine your personalized hourly rate based on market data and your goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/calculator')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Calculate My Rate
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-6 text-center">
        <p className="text-sm text-gray-500 max-w-4xl mx-auto">
          * Pricing varies significantly by skill level, experience, project complexity, client budget, 
          and geographic location. These ranges are estimates based on platform data and should be used as general guidance only. 
          Always research your specific niche and adjust rates based on your unique value proposition.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pricing Buddy. All rights reserved.
      </footer>
    </div>
  );
}