import React from "react";
import { Link } from "react-router-dom";

const CardNoticia = ({ noticia }) => {
  return (
    <div className="card border shadow-sm">
      <img
        src={noticia.imagen}
        className="card-img-top"
        alt={noticia.titulo}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body" style={{ color: "#3c1a3d" }}>
        <h5 className="card-title">{noticia.titulo}</h5>
        <p className="card-text">{noticia.descripcionCorta}</p>
        <Link
          to={`/noticia/${noticia.id}`}
          className="btn text-white"
          style={{ backgroundColor: "#3c1a3d" }}
        >
          Leer más
        </Link>
      </div>
    </div>
  );
};

export default CardNoticia;
