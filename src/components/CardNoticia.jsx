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
          to={`/noticias/${noticia.id}`}
          className="btn"
          style={{
            backgroundColor: "#3c1a3d",
            color: "white",
            border: "2px solid #3c1a3d",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#3c1a3d";
            e.target.style.border = "2px solid #3c1a3d";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#3c1a3d";
            e.target.style.color = "white";
            e.target.style.border = "2px solid #3c1a3d";
          }}
        >
          Leer más
        </Link>
      </div>
    </div>
  );
};

export default CardNoticia;
