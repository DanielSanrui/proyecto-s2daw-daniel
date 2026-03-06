import React from "react";
import preguntas from "../data/FAQ.json";

const Faq = () => {
  return (
    <section className="bg-white pt-5 pb-3 px-3 px-md-5" id="faq">
      <style>{`
        .faq-details {
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(60, 26, 61, 0.08);
        }
        .faq-details:hover {
          box-shadow: 0 4px 16px rgba(60, 26, 61, 0.15);
          transform: translateY(-2px);
        }
        .faq-summary {
          list-style: none;
          transition: background 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .faq-summary::-webkit-details-marker {
          display: none;
        }
        .faq-summary::after {
          content: "＋";
          font-size: 1.3rem;
          transition: transform 0.3s ease;
          flex-shrink: 0;
          margin-left: 1rem;
        }
        .faq-details[open] .faq-summary::after {
          transform: rotate(45deg);
        }
        .faq-details[open] .faq-summary {
          background: linear-gradient(135deg, #3c1a3d 0%, #5a2a5d 100%) !important;
        }
        .faq-summary:hover {
          background: linear-gradient(135deg, #5a2a5d 0%, #3c1a3d 100%) !important;
        }
        .faq-content {
          animation: fadeIn 0.3s ease;
          background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <h2 className="text-center mb-4 fw-bold fs-2" style={{ color: "#3c1a3d" }}>
        Preguntas Frecuentes
      </h2>

      <div className="container" style={{ maxWidth: "700px" }}>
        {preguntas.map((item, index) => (
          <details key={index} className="faq-details border-0 rounded-3 mb-3 overflow-hidden">
            <summary className="faq-summary px-4 py-3 fw-semibold text-white" style={{ backgroundColor: "#3c1a3d", cursor: "pointer" }}>
              {item.pregunta}
            </summary>
            <div className="faq-content px-4 py-3 border border-top-0">
              <p className="mb-0 text-dark lh-lg small">
                {item.respuesta}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;
