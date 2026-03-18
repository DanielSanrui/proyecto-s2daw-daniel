import React from "react";
import { Link } from "react-router-dom";
import "../css/CardHermandad.css";

const CardHermandad = ({ hermandad }) => {
  const { nombre, sede, barrio, escudo, descripcionCorta, slug } = hermandad;

  return (
    <div className="card-hermandad">
      <img
        src={escudo}
        alt={nombre}
        className="card-hermandad__img"
      />
      <div className="card-hermandad__body">
        <div>
          <h4 className="card-hermandad__titulo">{nombre}</h4>
          {barrio && (
            <p className="card-hermandad__meta">
              <span className="card-hermandad__meta-label">Barrio:</span> {barrio}
            </p>
          )}
          <p className="card-hermandad__meta">
            <span className="card-hermandad__meta-label">Sede:</span> {sede}
          </p>
          <p className="card-hermandad__desc">{descripcionCorta}</p>
        </div>
        <div className="card-hermandad__footer">
          <Link to={`/hermandades/${slug}`} className="btn btn-dorado-outline">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardHermandad;