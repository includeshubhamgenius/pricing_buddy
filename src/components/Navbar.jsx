import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import PBlogo from '../assets/PBlogo.png';

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? 'text-orange-500 font-semibold'
      : 'text-black hover:underline transition-colors duration-200';

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-md bg-white/30 fixed w-full z-50 p-4 flex justify-between items-center shadow-md"
    >
      <div className="space-x-2 flex justify-between items-center">
        <img src={PBlogo} alt="PB" className="w-7 h-7" />
        <h2 className="text-2xl font-semibold">
          Pricing <span className="text-orange-500 font-bold">Buddy</span>
        </h2>
      </div>

      <div className="space-x-8 mr-10">
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/how-it-works" className={linkStyle}>How it Works</NavLink>
        <NavLink to="/features" className={linkStyle}>Features</NavLink>
        <NavLink to="/pricing" className={linkStyle}>Pricing</NavLink>
        <NavLink to="/Calculator" className="bg-orange-500 text-white px-4 py-2 rounded-full shadow hover:bg-orange-500 transition">Try now</NavLink>
      </div>
    </motion.nav>
  );
}
