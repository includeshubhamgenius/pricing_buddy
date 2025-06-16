import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer(){
  return (
    <footer className="bg-orange-400 rounded-t-3xl  py-20 px-6 md:px-12 text-[#003e39]">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-16">
        
        {/* Top Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Section 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">For Freelancers</h3>
            <div className="flex flex-col gap-2">
              <FooterLink text="Hourly Rate Calculator" />
              <FooterLink text="Blog: Learn Pricing" />
              <FooterLink text="How It Works" />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <div className="flex flex-col gap-2">
              <FooterLink text="Pricing" />
              <FooterLink text="Blog" />
              <FooterLink text="About" />
              <FooterLink text="Support" />
              <FooterLink text="Contact Us" />
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <div className="flex flex-col gap-2">
              <FooterLink text="About Pricing Buddy" />
              <FooterLink text="Contact Us" />
              <span className="text-sm mt-1">Support</span>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & Features</h3>
            <div className="flex flex-col gap-2">
              <FooterLink text="Quote Estimator" />
              <FooterLink text="Rate Recommendation" />
              <FooterLink text="Pricing Breakdown Logic" />
              <FooterLink text="Save as PDF (future)" />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex gap-4">
          <SocialIcon Icon={FaFacebookF} />
          <SocialIcon Icon={FaTwitter} />
          <SocialIcon Icon={FaInstagram} />
        </div>

        {/* Divider */}
        <div className="border-t border-black pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex gap-6">
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Terms of Use" />
            <FooterLink text="Disclaimer" />
          </div>
          <p className="text-sm text-white mt-4 md:mt-0 text-center md:text-right">
            © 2025 Pricing Buddy by Shubham Verma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Reusable Link Component
const FooterLink = ({ text, href = "#" }: { text: string; href?: string }) => (
  <a
    href={href}
    className="text-sm hover:underline transition duration-200 ease-in-out"
  >
    {text}
  </a>
);

// Reusable Social Icon Wrapper
const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="w-11 h-11 bg-[#e7ebe4] flex items-center justify-center rounded-full hover:scale-110 transition">
    <Icon className="w-5 h-5" />
  </div>
);
