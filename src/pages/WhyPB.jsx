import BeginnerImage from '../assets/beginner.png';
import RateImage from '../assets/rate.png';
import WidgetImage from '../assets/widget.png';
import PayoutImage from '../assets/payout.png';
import BreakdownImage from '../assets/breakdown.png';
import AiImage from '../assets/ai.png';
import MarketImage from '../assets/market.svg';

export default function WhyPB() {
  const imageMap = [
    BeginnerImage,
    RateImage,
    WidgetImage,
    PayoutImage,
    BreakdownImage,
    AiImage,
    MarketImage
  ];

  const imagePositions = [
    'top-4 right-4',
    'bottom-4 right-4',
    'top-6 left-6',
    'bottom-6 left-6',
    'top-4 right-8',
    'bottom-8 right-8',
    'top-6 right-6'
  ];

  return (
    <section className="w-full max-w-screen-xl mx-auto py-32 px-6">
      <div className="text-center mb-20">
        <h4 className="text-xs font-bold tracking-widest text-[#002b28] mb-4">
          UNIQUE FEATURES
        </h4>
        <h2 className="text-4xl md:text-4xl font-bold text-[rgb(0,43,40)] leading-tight max-w-3xl mx-auto">
          What Makes Pricing Buddy Different?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[minmax(180px,_1fr)]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-${feature.bg} rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between animate-pulse-slow ${feature.span}`}
          >
            <div
              className={`absolute w-20 h-20 opacity-10 bg-cover bg-center ${imagePositions[index]}`}
              style={{ backgroundImage: `url(${imageMap[index]})` }}
            />
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-[#002b28] mb-1">{feature.title}</h3>
              <p className="text-sm text-[#002b28]">{feature.description}</p>
            </div>
            {feature.tag && (
              <span className="mt-2 bg-[#002b28] text-white text-xs font-semibold px-3 py-1 rounded-md w-fit z-10">
                {feature.tag}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    title: 'Beginner-Friendly UI',
    description: 'Simple, intuitive design ideal for new users starting out.',
    tag: 'ONLY AT RUUL',
    bg: 'green-100',
    span: 'col-span-2 row-span-1'
  },
  {
    title: 'Intelligent Rate Suggestions',
    description: 'Calculates hourly rate based on your goals, time, and market averages.',
    bg: 'orange-100',
    span: 'col-span-2 row-span-1 col-start-3'
  },
  {
    title: 'Embeddable Widget (Coming Soon)',
    description: 'Use our widget in your own platform to bring the magic of pricing anywhere.',
    tag: 'ONLY AT RUUL',
    bg: 'green-200',
    span: 'col-span-2 row-span-2'
  },
  {
    title: 'Fastest payout delivery',
    description: 'We ensure your payout is processed within just 1 day.',
    bg: 'orange-200',
    span: 'col-span-3 row-span-1'
  },
  {
    title: 'Transparent Quote Breakdown',
    description: 'Shows how the final quote is calculated to build client trust.',
    bg: 'green-100',
    span: 'col-span-3 row-span-2'
  },
  {
    title: 'AI-Powered Estimation',
    description: 'Trained with real project data to provide optimized pricing ranges.',
    bg: 'orange-100',
    span: 'col-span-3 row-span-1'
  },
  {
    title: 'Localized Market Data',
    description: 'Uses regional metrics to generate more accurate suggestions.',
    bg: 'green-200',
    span: 'col-span-2 row-span-1 col-start-5'
  }
];

