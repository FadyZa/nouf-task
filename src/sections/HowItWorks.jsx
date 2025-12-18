import Step from "../components/home/Step";

export default function HowItWorks() {
  const stepsData = [
    {
      id: 1,
      title: "Press the Mic",
      description:
        "Simply tap the microphone button to start your voice search instantly",
      icon: "/mic.png",
    },
    {
      id: 2,
      title: "Say What You're Looking For",
      description:
        "Speak naturally — whether it's a product name, category, or description. Nouf will understand.",
      icon: "/voice.png",
    },
    {
      id: 3,
      title: "Nouf Understands",
      description: "Nouf instantly understands your request.",
      icon: "/nouf-mic.png",
    },
    {
      id: 4,
      title: "Get Smart Suggestions",
      description: "See the best matching products.",
      icon: "/shopping-bag.png",
    },
    {
      id: 5,
      title: "Refine with Simple Questions",
      description:
        "Answer a few quick questions if you want to specify color, size, or price",
      icon: "/help-circle.png",
    },
    {
      id: 6,
      title: "Choose & Buy",
      description:
        "Select the best product and add it to your cart effortlessly.",
      icon: "/checkmark-circle.png",
    },
  ];
  return (
    <section
      className="howitworks-section page-section py-5 my-5"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container">
        <h2
          className="main-title mb-3"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          How it Works..?
        </h2>
        <div className="steps-section" data-aos="fade-up" data-aos-delay="300">
          <div className="center-line">
            <span className="top-line"></span>
            <span className="bottom-line"></span>
          </div>
          {stepsData.map((step, i) => (
            <Step
              key={step.id}
              stepNum={i + 1}
              details={step.description}
              icon={step.icon}
              title={step.title}
              animation="fade-up"
              animationDelay={400 + i * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
