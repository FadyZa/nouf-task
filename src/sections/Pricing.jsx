export default function Pricing() {
  return (
    <section className="pricing-section page-section py-5 my-5">
      <div className="container">
        <h2 className="main-title mb-3">Pricing</h2>
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
            <h3 className="pricing-heading">
              Free Integration. Pay Only Per Call.
            </h3>
            <p className="pricing-sub-text">
              We integrate the full voice-agent system for free — no setup fees
              or contracts.
            </p>

            <div className="price-box">
              <h3 className="price-title">1 SAR per call</h3>
              <p className="price-subtitle">Up to 5 minutes per call</p>

              <ul className="feature-list">
                <li className="feature-item">
                  <img
                    src="/ai-mic.png"
                    alt="pricing feature image"
                    width="20px"
                    height="20px"
                  />
                  <span>AI Voice Automation</span>
                </li>
                <li className="feature-item">
                  <img
                    src="/flash-sm.png"
                    alt="pricing feature image"
                    width="20px"
                    height="20px"
                  />
                  <span>Zero Setup Fees</span>
                </li>
                <li className="feature-item">
                  <img
                    src="/stats-sm.png"
                    alt="pricing feature image"
                    width="20px"
                    height="20px"
                  />
                  <span>Scales With Your Traffic</span>
                </li>
              </ul>
            </div>

            <button className="contact-btn main-button">Contact Us</button>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="image-container">
              <img
                src="/pricing-img.png"
                alt="Pricing image"
                className="img-fluid pricing-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
