import React from "react";
import { Link } from "react-router-dom";
import "../css/Botones.css";
import "../css/CardNoticia.css";

const CardNoticia = ({ noticia }) => {
  return (
    <div className="card-noticia">
      <div className="card-noticia__img-wrap">
        <img
          src={noticia.imagen}
          alt={noticia.titulo}
          className="card-noticia__img"
        />
        <div className="card-noticia__img-overlay" />
        {noticia.fecha && (
          <span className="card-noticia__fecha">
            {new Date(noticia.fecha).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        )}
      </div>
      <div className="card-noticia__body">
        <h5 className="card-noticia__titulo">{noticia.titulo}</h5>
        <p className="card-noticia__desc">{noticia.descripcionCorta}</p>
        <Link to={`/noticias/${noticia.id}`} className="card-noticia__btn">
          Leer más
        </Link>
      </div>
    </div>
  );
};

export default CardNoticia;