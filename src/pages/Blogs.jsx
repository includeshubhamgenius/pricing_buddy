import dummyImage from '../assets/dummyImage.png'; // adjust path if needed

export default function Blogs() {
  const articles = [
    {
      title: "How to Freelance While Working Full Time?",
      image: dummyImage,
    },
    {
      title: "How to invest in your brand as a freelancer",
      image: dummyImage,
    },
    {
      title: "Ruul Now Supports Cryptocurrency Payments for Freelancers",
      image: dummyImage,
    },
    {
      title: "7 steps to become a freelance web developer",
      image: dummyImage,
    },
    {
      title: "Invoicing and payment terms every freelancer must know",
      image: dummyImage,
    },
    {
      title: "10 Steps to Becoming a Freelance Photographer (Your Comprehensive Guide)",
      image: dummyImage,
    },
  ];

  return (
    <div className="flex flex-col max-w-[1240px] w-full items-center gap-[60px] relative rounded-[20px]">
      {/* Section Header */}
      <div className="flex flex-col max-w-[720px] items-center gap-[11px]">
        <div className="text-[#002b28] font-bold text-base tracking-[2.20px] leading-4 uppercase">
          Blog
        </div>
        <h2 className="text-[#002b28] font-bold text-[56px] text-center tracking-[-3px] leading-[64.4px]">
          Related Articles
        </h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-6 max-w-[941.63px]">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-5 bg-[#f2f4f0] rounded-2xl w-[298px] min-h-[278px]"
          >
            <div className="w-full h-[160px] rounded-lg overflow-hidden mb-[15.5px]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#003e39] font-normal text-xl leading-[30px]">
              {article.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
