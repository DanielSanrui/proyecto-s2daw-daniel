import React from "react";
import recorridos from "../data/Recorridos.json";
import "../css/Hermandad.css";

const TablaRecorrido = ({ slug }) => {
  const datosHermandad = recorridos[slug];

  if (!datosHermandad || !datosHermandad.recorrido) {
    return (
      <p className="text-danger">
        No se encontró el recorrido para esta hermandad.
      </p>
    );
  }

  const primerFila = datosHermandad.recorrido.find(
    (fila) => fila.palio || fila.duelo || fila.paso
  );
  const nombreColumna =
    (primerFila?.palio && "Palio") ||
    (primerFila?.duelo && "Duelo") ||
    (primerFila?.paso && "Paso") ||
    "Otro Paso";

  const palabrasClave = [
    "PLAZA", "CAMPANA", "SIERPES", "AVENIDA", "P. SAN MIGUEL", "P. PALOS",
  ];

  const esCeldaDestacada = (texto = "") => {
    const limpio = texto.trim().toUpperCase();
    return palabrasClave.some((clave) => {
      const regex = new RegExp(`^${clave}(\\s\\(\\d{1,2}:\\d{2}\\))?$`);
      return regex.test(limpio);
    });
  };

  const esTextoEnNegrita = (texto = "") => /salida|entrada/i.test(texto);
  const segundoValorCampo = (fila) => fila.palio || fila.paso || fila.duelo || "-";

  return (
    <div className="mb-5">
      <h2 className="hermandad-section-titulo">Recorrido Oficial y Horarios</h2>
      <div className="table-responsive">
        <table className="recorrido-tabla">
          <thead>
            <tr>
              <th className="recorrido-th">Cruz de Guía</th>
              <th className="recorrido-th">{nombreColumna}</th>
            </tr>
          </thead>
          <tbody>
            {datosHermandad.recorrido.map((fila, idx) => {
              const valor1 = fila.cruzDeGuia || "-";
              const valor2 = segundoValorCampo(fila);
              const destacada1 = esCeldaDestacada(valor1);
              const destacada2 = esCeldaDestacada(valor2);
              const negrita1 = esTextoEnNegrita(valor1);
              const negrita2 = esTextoEnNegrita(valor2);

              return (
                <tr key={idx} className={idx % 2 === 0 ? "recorrido-fila-par" : "recorrido-fila-impar"}>
                  <td className={`recorrido-td ${destacada1 ? "recorrido-td--destacada" : ""} ${negrita1 ? "recorrido-td--negrita" : ""}`}>
                    {valor1}
                  </td>
                  <td className={`recorrido-td ${destacada2 ? "recorrido-td--destacada" : ""} ${negrita2 ? "recorrido-td--negrita" : ""}`}>
                    {valor2}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaRecorrido;