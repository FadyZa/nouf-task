import React from "react";

export default function Connect() {
  return (
    <section
      className="connect-section page-section py-5 my-5"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container">
        <div className="row g-0 g-md-5">
          <div className="col-md-6" data-aos="fade-right" data-aos-delay="300">
            <div className="connect-details">
              <div className="connect-img">
                <img
                  src="/FuturisticMic.png"
                  alt="connect image"
                  className="img-fluid"
                  width="320px"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
                <h2
                  className="connect-heading mb-4"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Let's Connect and Bring <br /> <span>AI Voice</span> <br />
                  to Your Business
                </h2>
                <p
                  className="connect-description"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Explore seamless integration opportunities and discover how
                  our enterprise-grade AI voice agents can transform your
                  customer interactions. Let's build the future together.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
            <div
              className="form-container"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <form>
                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" placeholder="John Smith" />
                </div>

                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="850"
                >
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  <label htmlFor="email">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@company.com"
                  />
                </div>

                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="950"
                >
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your integration needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn main-button mx-auto d-flex mb-3"
                  data-aos="fade-up"
                  data-aos-delay="1100"
                >
                  Request Integration Demo
                </button>
                <p
                  className="response-text"
                  data-aos="fade-up"
                  data-aos-delay="1150"
                >
                  We'll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
