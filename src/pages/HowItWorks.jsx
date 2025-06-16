import { FaSearchDollar, FaSlidersH, FaChartPie, FaFilePdf } from "react-icons/fa";

export default function HowItWorks(){
  return (
    <div className="bg-white text-[#003e39] px-6 md:px-12 py-20 max-w-[1160px] mx-auto">
      
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-lg text-gray-700">
          Pricing Buddy helps freelancers find the right hourly rate based on their skills, goals, and lifestyle.
        </p>
      </div>

      {/* Step-by-Step Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Step
          icon={<FaSearchDollar className="text-3xl text-[#003e39]" />}
          title="1. Estimate Your Hourly Rate"
          description="Answer a few simple questions about your work, expenses, and income expectations."
        />
        <Step
          icon={<FaSlidersH className="text-3xl text-[#003e39]" />}
          title="2. Customize Your Needs"
          description="Adjust factors like work hours, tax rates, and buffer income to get a personalized result."
        />
        <Step
          icon={<FaChartPie className="text-3xl text-[#003e39]" />}
          title="3. View Your Breakdown"
          description="Get a clear breakdown of your ideal hourly rate, including expenses, profit, and taxes."
        />
        <Step
          icon={<FaFilePdf className="text-3xl text-[#003e39]" />}
          title="4. Export as PDF (Coming Soon)"
          description="Soon you’ll be able to download your pricing strategy as a PDF and share it with clients or mentors."
        />
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">Ready to price like a pro?</h2>
        <a
          href="/"
          className="inline-block bg-[#003e39] text-white px-6 py-3 rounded-full hover:bg-[#02544f] transition"
        >
          Try Pricing Buddy Now
        </a>
      </div>
    </div>
  );
};

// Reusable Step Component
const Step = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 flex items-center justify-center bg-[#f5da2a] rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);
