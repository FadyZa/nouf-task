import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Faqs() {
  const [openId, setOpenId] = useState(1);

  const faqs = [
    {
      id: 1,
      question:
        "Does the solution support multiple languages and dialects... ?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo corporis dolorum quo sunt odit dolorem facilis consequuntur alias nulla asperiores",
    },
    {
      id: 2,
      question:
        "Is the voice assistant easy to integrate into our existing platform ?",
      answer:
        "Yes. Our system provides a lightweight API and SDKs that can be integrated into websites, mobile apps, and e-commerce platforms with minimal development effort",
    },
    {
      id: 3,
      question: "Is voice data stored or processed securely ...?",
      answer:
        "consectetur adipisicing elit. Maxime cum cumque adipisci. Adipisci quasi earum, modi repellat doloremque sunt! Nemo nobis fugit, ab quas consectetur eius et non veniam perspiciatis iusto mollitia pariatur debitis, illo hic quod adipisci enim repellendus.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenId(openId === index ? null : index);
  };

  return (
    <>
      <div className="faq-section">
        <div className="container">
          <h2 className="main-title mb-3">FAQ’s</h2>
          <div className="faq-container">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="faq-button"
                >
                  <span className="faq-icon">
                    {openId === faq.id ? "-" : "+"}
                  </span>
                  <span
                    className={`faq-question ${
                      openId === faq.id ? "active" : ""
                    }`}
                  >
                    {faq.question}
                  </span>
                </button>
                <div
                  className={`faq-answer-wrapper ${
                    openId === faq.id ? "open" : ""
                  }`}
                >
                  {faq.answer && <div className="faq-answer">{faq.answer}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
