import React from "react";
import preguntas from "../data/Preguntas.json";

const Faq = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-[#3c1a3d] mb-10">
        Preguntas Frecuentes
      </h1>
      <div className="space-y-6">
        {preguntas.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-md border-l-4 border-[#3c1a3d]"
          >
            <h2 className="text-xl font-semibold text-[#3c1a3d] mb-2">
              {item.pregunta}
            </h2>
            <p className="text-gray-700">{item.respuesta}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Faq;
