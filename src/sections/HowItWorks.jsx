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
    <section className="howitworks-section page-section py-5 my-5">
      <div className="container">
        <h2 className="main-title mb-3">How it Works..?</h2>
        <div className="steps-section">
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
            />
          ))}
          {/* <div className="step first">
            <section>
              <div className="step-num">1</div>
              <h3 className="step-title">Press the Mic </h3>
              <p className="step-details">
                Simply tap the microphone button to start your voice search
                instantly
              </p>
            </section>
            <div className="icon-wrapper">
              <img src="/mic.png" height="90px" width="90px" alt="step image" />
            </div>
          </div>
          <div className="step second">
            <section>
              <div className="step-details">
                <span className="step-title">Header of Section 2</span>
              </div>
              <p>
                Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
                qui veroes praesentium maiores, sint eos vero sapiente voluptas
                debitis dicta dolore.
              </p>
            </section>
            <div className="icon-wrapper">
              <i className="icon fas fa-star"></i>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
