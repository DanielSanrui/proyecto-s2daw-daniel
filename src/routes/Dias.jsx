import React from "react";
import diasData from "../data/Dias.json";
import CardDia from "../components/CardDia.jsx";
import "../css/Dias.css";

const Dias = () => {
  return (
    <div>
      {/* ── CABECERA ── */}
      <section className="dias-header">
        <div className="dias-header__overlay" />
        <div className="dias-header__contenido">
          <h1 className="dias-header__titulo">Días de la Semana Santa</h1>
          <div className="dias-header__linea" />
          <p className="dias-header__subtitulo">
            Descubre las hermandades que procesionan cada día
          </p>
        </div>
      </section>

      <div className="container dias-lista">
        {diasData.map((dia, index) => (
          <CardDia
            key={index}
            nombre={dia.nombre}
            descripcion={dia.descripcion}
            imagen={dia.imagen}
            ruta={dia.ruta}
          />
        ))}
      </div>
    </div>
  );
};

export default Dias;