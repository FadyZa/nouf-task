export default function Pricing() {
  return (
    <section
      className="pricing-section page-section py-5 my-5"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container">
        <h2
          className="main-title mb-3"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Pricing
        </h2>
        <div className="row align-items-center">
          <div
            className="col-lg-5 col-md-12 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h3
              className="pricing-heading"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Free Integration. Pay Only Per Call.
            </h3>
            <p
              className="pricing-sub-text"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              We integrate the full voice-agent system for free — no setup fees
              or contracts.
            </p>

            <div className="price-box" data-aos="fade-up" data-aos-delay="600">
              <h3 className="price-title">1 SAR per call</h3>
              <p className="price-subtitle">Up to 5 minutes per call</p>

              <ul className="feature-list">
                <li
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <img
                    src="/ai-mic.png"
                    alt="pricing feature image"
                    width="20px"
                    height="20px"
                  />
                  <span>AI Voice Automation</span>
                </li>
                <li
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="750"
                >
                  <img
                    src="/flash-sm.png"
                    alt="pricing feature image"
                    width="20px"
                    height="20px"
                  />
                  <span>Zero Setup Fees</span>
                </li>
                <li
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
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

            <button
              className="contact-btn main-button"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              Contact Us
            </button>
          </div>

          <div
            className="col-lg-7 col-md-12"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="image-container">
              <img
                src="/pricing-img.png"
                alt="Pricing image"
                className="img-fluid pricing-image"
                data-aos="zoom-in"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
