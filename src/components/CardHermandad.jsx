import React from "react";
import { Link } from "react-router-dom";

const CardHermandad = ({ hermandad }) => {
  const { nombre, sede, barrio, escudo, descripcionCorta, slug } = hermandad;
  return (
    <div
      className="d-flex flex-column flex-md-row text-white shadow rounded border border-light overflow-hidden p-2"
      style={{ backgroundColor: "#3c1a3d" }}
    >
      <img
        src={escudo}
        alt={`${nombre}`}
        className="w-100 w-md-25 h-100 object-fit-cover m-2"
        style={{ maxWidth: "240px", height: "190px", objectFit: "cover" }}
      />
      <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
        <div>
          <h4 className="h5 fw-bold mb-2">{nombre}</h4>
          {barrio && (
            <p className="mb-1">
              <strong>Barrio:</strong> {barrio}
            </p>
          )}
          <p className="mb-1">
            <strong>Sede:</strong> {sede}
          </p>
          <p className="mt-2">{descripcionCorta}</p>
        </div>
        <div className="mt-3">
          <Link
            to={`/hermandades/${slug}`}
            className="btn btn-light text-dark px-4 py-2 rounded shadow-sm"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardHermandad;
