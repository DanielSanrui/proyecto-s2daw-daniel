import React from "react";
import diasData from "../data/Dias.json";
import CardDia from "../components/cardDia";

const Dias = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#3c1a3d" }}>
        Días de la Semana Santa
      </h1>
      {diasData.map((dia, index) => (
        <CardDia
          key={index}
          nombre={dia.nombre}
          descripcion={dia.descripcion}
          imagen={dia.imagen}
        />
      ))}
    </div>
  );
};

export default Dias;
