import FeaturedCard from "../components/home/FeaturedCard";

export default function Features() {
  const featuresData = [
    {
      id: 1,
      img: "/merge-icon.png",
      title: "Plug-and-Play API",
      description:
        "Simplify onboarding with our plug-and-play, highly extensible web and mobile apps instantly.",
      highlight: "Integrate fast!",
    },
    {
      id: 2,
      img: "/user-talk-icon.png",
      title: "Accurate Speech Recognition",
      description: "Achieve 2-3x higher accuracy for every customer.",
      highlight: "Understand more!",
    },
    {
      id: 3,
      img: "/lucide_brain-icon.png",
      title: "Intent-Based AI",
      description: "what your users are saying, not just what they say.",
      highlight: "Recognizes",
    },
    {
      id: 4,
      img: "/round-lock-icon.png",
      title: "Enterprise-Grade Security",
      description: "real user data with full encryption and compliance.",
      highlight: "Protects",
    },
    {
      id: 5,
      img: "/outline-language-icon.png",
      title: "Easy Customization",
      description:
        "It provides full complex setup to any dashboard and mobile apps.",
      highlight: "Integrate fast!",
    },
    {
      id: 6,
      img: "/report-bar-icon.png",
      title: "Scalable & Reliable",
      description: "intentions, engagement, and conversations easily.",
      highlight: "Track",
    },
  ];

  return (
    <section className="features-section page-section py-5 my-5">
      <div className="container">
        <h2 className="main-title text-center">Features & Tech</h2>
        <div class="row g-4">
          {featuresData.map((feature) => (
            <FeaturedCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              img={feature.img}
              highlight={feature.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
