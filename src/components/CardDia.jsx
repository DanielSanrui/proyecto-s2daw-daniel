import React from "react";
import { Link } from "react-router-dom";

const CardDia = ({ nombre, descripcion, imagen }) => {
  return (
    <div className="card mb-4 shadow border">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={imagen}
            alt={nombre}
            className="img-fluid h-100 object-fit-cover rounded-start"
          />
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-between p-4">
          <div>
            <h2 className="h4 fw-bold mb-2">{nombre}</h2>
            <p className="text-muted mb-3">{descripcion}</p>
          </div>
          <Link
            to={`/dias/${nombre.toLowerCase().replace(/\s/g, "-")}`}
            className="btn btn-outline-dark"
          >
            Ver Hermandades
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDia;
