export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div
          className="badge-pill gradient-border"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Voice-First. Business-Ready
        </div>

        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
          Deliver instant AI-powered voice experiences to your customers
        </h1>

        <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
          Nouf is an AI Voice Agent that lets your users order, ask, or interact
          with your service using natural conversation — fully integrated with
          your platform in minutes.
        </p>

        <a
          href="#"
          className="main-button"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Get Started
          <span>›</span>
        </a>

        <div className="phone-mockup" data-aos="zoom-in" data-aos-delay="500">
          <img
            src="/hero-img.png"
            alt="phone mockup image"
            className="img-fluid"
          />
        </div>

        <div className="customers py-5">
          <p
            className="customers-description"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            160,000+ customers in over 120 countries grow their businesses with
            Nouf
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-5 customers-logo mt-4">
            <div
              className="customers-logo-wrapper"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/Logoipsum.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div
              className="customers-logo-wrapper"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="/Logoipsum-1.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div
              className="customers-logo-wrapper"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                src="/Logoipsum-2.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div
              className="customers-logo-wrapper"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                src="/Logoipsum-3.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div
              className="customers-logo-wrapper"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img
                src="/Logoipsum-4.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div
              className="customers-logo-wrapper"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img
                src="/Logoipsum-5.png"
                className="img-fluid"
                alt="customer logo"
              />
            </div>
            <div
              className="customers-logo-wrapper"
              data-aos="fade-up"
              data-aos-delay="800"
            >
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
