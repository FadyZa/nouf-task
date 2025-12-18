export default function BenefitCard({
  icon,
  titleHighlight,
  title,
  description,
  animation,
  animationDelay,
}) {
  return (
    <div
      className="col-12 col-md-6 col-lg-4"
      data-aos={animation}
      data-aos-delay={animationDelay}
    >
      <div className="benefit-card gradient-border">
        <img
          src={icon}
          width="48px"
          height="48px"
          alt="Benfit Icon"
          className="benefit-icon"
        />
        <h3>
          <span>{titleHighlight}</span> {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
