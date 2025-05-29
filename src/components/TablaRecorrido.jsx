import React from "react";
import recorridos from "../data/Recorridos.json";

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
    "PLAZA",
    "CAMPANA",
    "SIERPES",
    "AVENIDA",
    "P. SAN MIGUEL",
    "P. PALOS",
  ];
  const esCeldaDestacada = (texto = "") => {
    const limpio = texto.trim().toUpperCase();
    return palabrasClave.some((clave) => {
      const regex = new RegExp(`^${clave}(\\s\\(\\d{1,2}:\\d{2}\\))?$`);
      return regex.test(limpio);
    });
  };

  const esTextoEnNegrita = (texto = "") => {
    return /salida|entrada/i.test(texto);
  };

  const segundoValorCampo = (fila) =>
    fila.palio || fila.paso || fila.duelo || "-";

  return (
    <div className="mb-5">
      <h2 className="h4 fw-semibold mb-3">Recorrido Oficial y Horarios</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-sm text-center align-middle">
          <thead className="text-white" style={{ backgroundColor: "#3c1a3d" }}>
            <tr>
              <th>Cruz de Guía</th>
              <th>{nombreColumna}</th>
            </tr>
          </thead>
          <tbody>
            {datosHermandad.recorrido.map((fila, idx) => {
              const valor1 = fila.cruzDeGuia || "-";
              const valor2 = segundoValorCampo(fila);

              const claseCruz = {
                ...(esCeldaDestacada(valor1) && {
                  backgroundColor: "#3c1a3d",
                  color: "white",
                }),
                fontWeight: esTextoEnNegrita(valor1) ? "bold" : "normal",
              };

              const clasePaso = {
                ...(esCeldaDestacada(valor2) && {
                  backgroundColor: "#3c1a3d",
                  color: "white",
                }),
                fontWeight: esTextoEnNegrita(valor2) ? "bold" : "normal",
              };

              return (
                <tr key={idx}>
                  <td style={claseCruz}>{valor1}</td>
                  <td style={clasePaso}>{valor2}</td>
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
