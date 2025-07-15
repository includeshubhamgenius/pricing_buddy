
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const Card = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={className}
  >
    {children}
  </motion.div>
);

const BlogCard = ({ title, excerpt, readTime, category, image, delay = 0 }) => (
  <Card delay={delay} className="group relative">
    <div className="relative overflow-hidden">
      {/* Floating orb background effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-pink-400/10 to-orange-400/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 delay-100" />
      
      {/* Main card */}
      <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden group-hover:bg-white/90 transition-all duration-500 cursor-pointer">
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 rounded-2xl transition-all duration-500" />
        <div className="absolute inset-[1px] bg-white/90 rounded-2xl overflow-hidden" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Image section */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500" />
            
            {/* Floating category on image */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50 shadow-sm"
            >
              <span className="text-xs font-medium text-gray-700">{category}</span>
            </motion.div>
            
            {/* Read time on image */}
            <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white">
              <Clock className="w-3 h-3" />
              <span className="text-xs">{readTime}m</span>
            </div>
          </div>
          
          {/* Text content */}
          <div className="p-6">
            {/* Title with gradient hover effect */}
            <h3 className="font-semibold text-gray-900 mb-3 text-lg leading-tight group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {title}
            </h3>
            
            {/* Excerpt */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
              {excerpt}
            </p>
            
            {/* Call-to-action */}
            <div className="flex items-center justify-between">
              <motion.div 
                whileHover={{ x: 8 }}
                className="flex items-center space-x-2 text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-300"
              >
                <span>Continue reading</span>
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
              
              {/* Subtle accent line */}
              <div className="h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent flex-1 ml-6 group-hover:via-blue-400/60 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

// Demo component
const Blogs = () => {
  const samplePosts = [
    {
      title: "The Art of Minimalist Design in Digital Interfaces",
      excerpt: "Exploring how less can truly be more when it comes to creating meaningful user experiences that resonate with modern audiences.",
      readTime: 5,
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      title: "Future of Sustainable Technology",
      excerpt: "Diving deep into emerging technologies that promise to reshape our relationship with the environment and create lasting positive impact.",
      readTime: 8,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      title: "Psychology of Color in Brand Identity",
      excerpt: "Understanding the subtle yet powerful ways colors influence perception, emotion, and decision-making in brand experiences.",
      readTime: 6,
      category: "Branding",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Elegant Blog Cards</h1>
          <p className="text-gray-600">Minimalist design with creative flair</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post, index) => (
            <BlogCard
              key={index}
              {...post}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;