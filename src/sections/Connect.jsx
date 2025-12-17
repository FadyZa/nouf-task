import React from "react";

export default function Connect() {
  return (
    <section className="connect-section page-section py-5 my-5">
      <div className="container">
        <div className="row g-0 g-md-5">
          <div className="col-md-6">
            <div className="connect-details">
              <div className="connect-img">
                <img
                  src="/FuturisticMic.png"
                  alt="connect image"
                  className="img-fluid"
                  width="320px"
                />
                <h2 className="connect-heading mb-4">
                  Let's Connect and Bring <br /> <span>AI Voice</span> <br />
                  to Your Business
                </h2>
                <p className="connect-description">
                  Explore seamless integration opportunities and discover how
                  our enterprise-grade AI voice agents can transform your
                  customer interactions. Let's build the future together.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-container">
              <form>
                <div className="form-group">
                  <label htmlhtmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" placeholder="John Smith" />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your integration needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn main-button mx-auto d-flex mb-3"
                >
                  Request Integration Demo
                </button>
                <p className="response-text">
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
