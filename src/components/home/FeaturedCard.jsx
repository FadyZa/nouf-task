import React from "react";

export default function FeaturedCard({ img, title, description, highlight }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="feature-card gradient-border">
        <div className="icon-wrapper">
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
