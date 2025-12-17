export default function Step({ stepNum, title, details, icon }) {
  return (
    <div className={`step ${stepNum % 2 === 1 ? "first" : "second"}`}>
      <section>
        <div className="step-num">{stepNum}</div>
        <h3 className="step-title">{title}</h3>
        <p className="step-details">{details}</p>
      </section>
      <div className="icon-wrapper">
        <img src={icon} height="90px" width="90px" alt="step image" />
      </div>
    </div>
  );
}
