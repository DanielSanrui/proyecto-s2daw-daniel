import React from "react";
import { useParams } from "react-router-dom";
import hermandades from "../data/Hermandades.json";
import dias from "../data/Dias.json";
import CardHermandad from "../components/CardHermandad";

// Diccionario de slugs → nombre de día
const diasMap = {
  "domingo-de-ramos": "Domingo de Ramos",
  "lunes-santo": "Lunes Santo",
  "martes-santo": "Martes Santo",
  "miercoles-santo": "Miércoles Santo",
  "jueves-santo": "Jueves Santo",
  madruga: "La Madrugá",
  "viernes-santo": "Viernes Santo",
  "sabado-santo": "Sábado Santo",
  "domingo-resurreccion": "Domingo de Resurrección",
};

const Dia = () => {
  const { nombreDia } = useParams();
  const nombreLegible = diasMap[nombreDia];

  const infoDia = dias.find((d) => d.nombre === nombreLegible);

  const hermandadesDelDia = hermandades.filter(
    (h) => h.diaSalida === nombreLegible
  );

  return (
    <div className="container py-5">
      <h1
        className="text-center text-4xl fw-bold mb-4"
        style={{ color: "#3c1a3d" }}
      >
        {nombreLegible || "Día no encontrado"}
      </h1>

      {infoDia && (
        <>
          <div className="mb-4 text-center">
            <p className="fs-5 text-muted">{infoDia.descripcion}</p>
          </div>
        </>
      )}

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
  );
};

export default Dia;
