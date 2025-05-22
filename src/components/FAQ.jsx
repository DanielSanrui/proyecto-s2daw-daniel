import React from "react";
import preguntas from "../data/FAQ.json";

const Faq = () => {
  return (
    <section className="bg-white py-5 px-3 px-md-5" id="faq">
      <h2
        className="text-center mb-5 fw-bold"
        style={{ color: "#3c1a3d", fontSize: "2.5rem" }}
      >
        Preguntas Frecuentes
      </h2>

      <div className="container" style={{ maxWidth: "800px" }}>
        {preguntas.map((item, index) => (
          <details
            key={index}
            className="border border-secondary rounded mb-3 overflow-hidden"
          >
            <summary
              className="px-4 py-3 fw-semibold"
              style={{
                backgroundColor: "#3c1a3d",
                color: "white",
                cursor: "pointer",
                fontSize: "1.1rem",
              }}
            >
              {item.pregunta}
            </summary>
            <div className="bg-white px-4 py-3">
              <p className="mb-0 text-dark" style={{ fontSize: "0.95rem" }}>
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
