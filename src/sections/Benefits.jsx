import BenefitCard from "../components/home/BenefitCard";

export default function Benefits() {
  const benefitsData = [
    {
      id: 1,
      icon: "/analytics-up.png",
      titleHighlight: "Higher",
      title: "Conversion Rates",
      description:
        "When customers find products faster through voice, they complete purchases more often – boosting your overall sales.",
    },
    {
      id: 2,
      icon: "/flash.png",
      titleHighlight: "Faster",
      title: "Product Discovery",
      description:
        "Voice helps users reach the right product in seconds, reducing drop-offs caused by long searches or complicated filters.",
    },
    {
      id: 3,
      icon: "/smile.png",
      titleHighlight: "Better",
      title: "User Experience",
      description:
        "Voice search makes shopping smoother, more intuitive, more accessible – especially for users who struggle with typing or don't have product names.",
    },
    {
      id: 4,
      icon: "/plug.png",
      titleHighlight: "Plug-Play",
      title: "Integration",
      description:
        "Add Nexal to your store with a simple script. No technical setup, no development time – just plug it in and start using it.",
    },
    {
      id: 5,
      icon: "/ai-brain.png",
      titleHighlight: "Smart",
      title: "Insights",
      description:
        "Gain valuable data about what users are asking for, popular voice queries, and customer intent – helping you improve products and increase store efficiency.",
    },
  ];

  return (
    <section
      className="benefits-section page-section py-5 my-5"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container">
        <h2
          className="main-title mb-3"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          nouf Benefits
        </h2>
        <div className="benefits-section">
          <div
            className="row g-4 justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {benefitsData.map((benefit, index) => (
              <BenefitCard
                key={benefit.id}
                icon={benefit.icon}
                titleHighlight={benefit.titleHighlight}
                title={benefit.title}
                description={benefit.description}
                animation="fade-up"
                animationDelay={400 + index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
