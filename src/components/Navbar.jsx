import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import PBlogo from '../assets/PBLogo2.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const linkStyle = ({ isActive }) => {
    const baseStyle = "relative text-sm px-4 py-2 rounded-lg font-medium transition-all duration-200 ease-out";
    return isActive
      ? `${baseStyle} text-blue-600  bg-blue-50/80 backdrop-blur-xl`
      : `${baseStyle} text-gray-700 font-light text-sm hover:text-blue-600 hover:bg-gray-50/80`;
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ease-out ${
          isScrolled 
            ? 'bg-none' 
            : 'bg-none backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Grid Layout for Even Spacing */}
          <div className="grid grid-cols-3 items-center">
            
            {/* Logo - Left Section */}
            <motion.div 
              className="flex items-center space-x-3 justify-self-start"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Logo with Glass Effect - Circular */}
              <div className="border border-black/10 rounded-xl p-1 bg-white/10 backdrop-blur-sm shadow-xl">
              
                  <div className="px-2 py-1 bg-white/90 backdrop-blur-xl flex items-center justify-center rounded-lg shadow-lg">
                    <img src={PBlogo} alt="PB" className="mr-2  w-8 h-8" />
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight ">
                  Pricing<span className="text-blue-600 font-lobster">Buddy</span>
                </h2>
                  </div>
                
              </div>
              <div>
                
              </div>
            </motion.div>

            {/* Desktop Navigation - Center Section */}
            <div className="hidden md:flex items-center justify-center">
              <div className="border border-black/10 rounded-xl p-1 bg-white/10 backdrop-blur-sm shadow-xl">
                <div className="border border-white/20 rounded-lg p-1 bg-white backdrop-blur-xl flex items-center gap-3">
                  <NavLink to="/" className={({ isActive }) => isActive ? "relative text-xs px-2 py-1 rounded-md font-medium transition-all duration-200 ease-out text-blue-600 bg-blue-50/80 backdrop-blur-xl" : "relative text-xs px-2 py-1 rounded-md font-normal transition-all duration-200 ease-out text-gray-700 hover:text-blue-600 hover:bg-gray-50/80"}>
                    Home
                  </NavLink>
                  <NavLink to="/how-it-works" className={({ isActive }) => isActive ? "relative text-xs px-2 py-1 rounded-md font-medium transition-all duration-200 ease-out text-blue-600 bg-blue-50/80 backdrop-blur-xl" : "relative text-xs px-2 py-1 rounded-md font-normal transition-all duration-200 ease-out text-gray-700 hover:text-blue-600 hover:bg-gray-50/80"}>
                    How it Works
                  </NavLink>
                  <NavLink to="/features" className={({ isActive }) => isActive ? "relative text-xs px-2 py-1 rounded-md font-medium transition-all duration-200 ease-out text-blue-600 bg-blue-50/80 backdrop-blur-xl" : "relative text-xs px-2 py-1 rounded-md font-normal transition-all duration-200 ease-out text-gray-700 hover:text-blue-600 hover:bg-gray-50/80"}>
                    Features
                  </NavLink>
                  <NavLink to="/pricing" className={({ isActive }) => isActive ? "relative text-xs px-2 py-1 rounded-md font-medium transition-all duration-200 ease-out text-blue-600 bg-blue-50/80 backdrop-blur-xl" : "relative text-xs px-2 py-1 rounded-md font-normal transition-all duration-200 ease-out text-gray-700 hover:text-blue-600 hover:bg-gray-50/80"}>
                    Pricing
                  </NavLink>
                </div>
              </div>
            </div>
            
            {/* CTA Button - Right Section */}
            <div className="hidden md:flex justify-self-end">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Auth Buttons with Glass Effect */}
                <div className="border border-black/10 rounded-xl p-1 bg-white/10 backdrop-blur-sm shadow-xl">
                  <div className="border border-white/20 rounded-lg p-1 bg-white backdrop-blur-xl flex items-center gap-0.5">
                    {/* Login Button */}
                    <NavLink 
                      to="/login" 
                      className="relative text-xs px-2 py-1 rounded-md font-normal transition-all duration-200 ease-out text-gray-700 hover:text-blue-600 hover:bg-gray-50/80"
                    >
                      Log in
                    </NavLink>
                    {/* Sign Up Button with Gradient */}
                    <NavLink 
                      to="/signup" 
                      className="relative text-xs px-2 py-1 rounded-md font-medium transition-all duration-200 ease-out bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-pink-600"
                    >
                      Sign up
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile Menu Button - Right Section (Mobile Only) */}
            <div className="md:hidden justify-self-end">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100/80 backdrop-blur-xl"
              >
                <motion.div
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  className="w-5 h-5 flex flex-col justify-center items-center"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 2 }
                    }}
                    className="w-5 h-0.5 bg-gray-700 rounded-full block origin-center transition-all duration-200"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    className="w-5 h-0.5 bg-gray-700 rounded-full block mt-1 transition-all duration-200"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -2 }
                    }}
                    className="w-5 h-0.5 bg-gray-700 rounded-full block mt-1 origin-center transition-all duration-200"
                  />
                </motion.div>
              </motion.button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-20 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden">
              <div className="p-6 space-y-2">
                <NavLink 
                  to="/" 
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium transition-all duration-200"
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/how-it-works" 
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium transition-all duration-200"
                >
                  How it Works
                </NavLink>
                <NavLink 
                  to="/features" 
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium transition-all duration-200"
                >
                  Features
                </NavLink>
                <NavLink 
                  to="/pricing" 
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium transition-all duration-200"
                >
                  Pricing
                </NavLink>
                <div className="pt-4 border-t border-gray-100">
                  <NavLink 
                    to="/calculator" 
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-6 py-4 rounded-2xl font-semibold shadow-lg"
                  >
                    Try Calculator
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}