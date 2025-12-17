export default function Conversation() {
  return (
    <section className="conversation-section page-section py-5 my-5">
      <div className="container">
        <div className="conversation-details d-flex flex-column justify-content-center align-items-center gap-2">
          <div class="badge-pill mb-0">Smart Cross-Selling</div>
          <h2 className="conversation-title text-center">
            Turn Every Conversation into Extra Sales!
          </h2>
          <p className="conversation-subtitle text-center">
            Nouf listens to customers, understands their needs, and suggests
            additional products automatically.
          </p>
          <div className="conversation-img">
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
