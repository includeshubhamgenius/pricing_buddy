import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import ScrollToTop from "./components/ScrollToTop"; 
import './index.css';
import Calculator from './pages/Calculator';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-jakarta bg-gray-50 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;