import React from "react";
import { useParams } from "react-router-dom";
import hermandades from "../data/Hermandades.json";
import dias from "../data/Dias.json";
import CardHermandad from "../components/CardHermandad.jsx";
import "../css/Dias.css";

const diasMap = {
  "viernes-de-dolores": "Viernes de Dolores",
  "sabado-de-pasion": "Sábado de Pasión",
  "domingo-de-ramos": "Domingo de Ramos",
  "lunes-santo": "Lunes Santo",
  "martes-santo": "Martes Santo",
  "miercoles-santo": "Miércoles Santo",
  "jueves-santo": "Jueves Santo",
  "la-madruga": "La Madrugá",
  "viernes-santo": "Viernes Santo",
  "sabado-santo": "Sábado Santo",
  "domingo-de-resurreccion": "Domingo de Resurrección",
};

const Dia = () => {
  const { nombreDia } = useParams();
  const nombreLegible = diasMap[nombreDia];
  const infoDia = dias.find((d) => d.nombre === nombreLegible);
  const hermandadesDelDia = hermandades.filter(
    (h) => h.diaSalida === nombreLegible
  );

  return (
    <div>
      {/* ── BANNER ── */}
      <section className="dia-banner">
        <div className="dia-banner__pattern" />
        <div className="dia-banner__circulo1" />
        <div className="dia-banner__circulo2" />

        {/* Texto izquierda */}
        <div className="dia-banner__texto">
          <span className="dia-banner__tag">Semana Santa · Sevilla 2026</span>
          <h1 className="dia-banner__titulo">
            {nombreLegible || "Día no encontrado"}
          </h1>
          <div className="dia-banner__linea" />
          {infoDia && (
            <p className="dia-banner__desc">{infoDia.descripcion}</p>
          )}
        </div>

        {/* Imagen derecha */}
        {infoDia?.imagen && (
          <div className="dia-banner__img-wrap">
            <img
              src={infoDia.imagen}
              alt={nombreLegible}
              className="dia-banner__img"
            />
            <div className="dia-banner__img-overlay" />
          </div>
        )}
      </section>

      {/* ── HERMANDADES DEL DÍA ── */}
      <div className="container py-5">
        {hermandadesDelDia.length === 0 ? (
          <p className="text-center text-muted">
            No hay hermandades registradas para este día.
          </p>
        ) : (
          <div className="d-flex flex-column gap-4">
            {hermandadesDelDia.map((hermandad, idx) => (
              <CardHermandad key={idx} hermandad={hermandad} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dia;