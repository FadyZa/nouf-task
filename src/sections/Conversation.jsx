export default function Conversation() {
  return (
    <section
      className="conversation-section page-section py-5 my-5"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container">
        <div className="conversation-details d-flex flex-column justify-content-center align-items-center gap-2">
          <div
            className="badge-pill mb-0"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Smart Cross-Selling
          </div>
          <h2
            className="conversation-title text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Turn Every Conversation into Extra Sales!
          </h2>
          <p
            className="conversation-subtitle text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Nouf listens to customers, understands their needs, and suggests
            additional products automatically.
          </p>
          <div
            className="conversation-img"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <img
              src="/comparison.png"
              alt="comparison image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
