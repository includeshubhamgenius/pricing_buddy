import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WhyPB from './WhyPB';
import Footer from '../components/Footer';
import MyIllustration from '../assets/Revenue-bro.svg';
import FAQAccordion from './FAQAccordion';
import Blogs from './Blogs';

export default function Home() {
  return (
    <div className="pt-24 px-6 space-y-16">
      {/* Hero Section */}
      <motion.section initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center">
        <h2 className="text-4xl font-bold mb-4">Smarter Freelance Pricing</h2>
        <p className="mb-6 text-gray-600">Know your worth. Quote with confidence.</p>
        <div className="mt-5 w-full h-90 rounded-xl flex items-center justify-center">
        <img src={MyIllustration} alt="Illustration" className="w-[360px] h-[360px]"  />
        </div>
        <div className="mt-5 space-x-4">
          <Link to="/calculator" className="bg-black text-white px-6 py-2 rounded-full">Try Now</Link>
          <Link to="/how-it-works" className="px-6 py-2 border rounded-full">See How it Works</Link>
        </div>
      </motion.section>
      {/* Why Pricing Buddy */}
      <section className="text-center">
        <WhyPB />
      </section>

      {/* FAQ */}
      <section>
       <FAQAccordion/>
      </section>

      {/* Related Articles */}
      <section>
        <Blogs/>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
