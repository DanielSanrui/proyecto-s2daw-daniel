import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify.js";
import "../css/Dias.css";

const CardDia = ({ nombre, descripcion, imagen, ruta }) => {
  const diaSlug = ruta ?? slugify(nombre);

  return (
    <div className="card-dia">
      <div className="card-dia__img-wrap">
        <img
          src={imagen}
          alt={nombre}
          className="card-dia__img"
        />
      </div>
      <div className="card-dia__body">
        <div>
          <h2 className="card-dia__titulo">{nombre}</h2>
          <p className="card-dia__desc">{descripcion}</p>
        </div>
        <Link to={`/dias/${diaSlug}`} className="btn btn-morado">
          Ver hermandades
        </Link>
      </div>
    </div>
  );
};

export default CardDia;