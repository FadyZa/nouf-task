export default function FeaturedCard({
  img,
  title,
  description,
  highlight,
  animation,
  animationDelay,
}) {
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos={animation}
      data-aos-delay={animationDelay}
    >
      <div className="feature-card gradient-border">
        <div className="feature-icon-wrapper">
          <div className="icon-dots">
            <img
              src="/feature-helper-bg.png"
              className="img-fluid"
              alt="dots bg"
            />
          </div>
          <div className="icon-main">
            <img src={img} className="img-fluid" alt="feature icon" />
          </div>
        </div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">
          <strong>{highlight}</strong> {description}
        </p>
      </div>
    </div>
  );
}
