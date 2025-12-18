export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="badge-pill gradient-border">
          Voice-First. Business-Ready
        </div>

        <h1 className="hero-title">
          Deliver instant AI-powered voice experiences to your customers
        </h1>

        <p className="hero-description">
          Nouf is an AI Voice Agent that lets your users order, ask, or interact
          with your service using natural conversation — fully integrated with
          your platform in minutes.
        </p>

        <a href="#" className="main-button">
          Get Started
          <span>›</span>
        </a>

        <div className="phone-mockup">
          <img
            src="/hero-img.png"
            alt="phone mockup image"
            className="img-fluid"
          />
        </div>

        <div className="customers py-5">
          <p className="customers-description">
            160,000+ customers in over 120 countries grow their businesses with
            Nouf
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-5 customers-logo mt-4">
            <div className="customers-logo-wrapper">
              <img
                src="/Logoipsum.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div className="customers-logo-wrapper">
              <img
                src="/Logoipsum-1.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div className="customers-logo-wrapper">
              <img
                src="/Logoipsum-2.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div className="customers-logo-wrapper">
              <img
                src="/Logoipsum-3.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div className="customers-logo-wrapper">
              <img
                src="/Logoipsum-4.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div className="customers-logo-wrapper">
              <img
                src="/Logoipsum-5.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div className="customers-logo-wrapper">
              <img
                src="/Logoipsum-6.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
