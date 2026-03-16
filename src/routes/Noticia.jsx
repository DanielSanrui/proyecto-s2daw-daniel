import React from "react";
import { useParams, Link } from "react-router-dom";
import noticias from "../data/Noticias.json";
import "../css/Botones.css";
import "../css/Noticia.css";

const Noticia = () => {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === parseInt(id));

  if (!noticia) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">Noticia no encontrada.</div>
      </div>
    );
  }

  return (
    <div className="noticia-page">

      {/* ── HERO CON IMAGEN Y TÍTULO ENCIMA ── */}
      <section className="noticia-hero">
        <img
          src={noticia.imagen}
          alt={noticia.titulo}
          className="noticia-hero__img"
        />
        <div className="noticia-hero__overlay" />
        <div className="noticia-hero__texto">
          <span className="noticia-hero__fecha">
            {new Date(noticia.fecha).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <h1 className="noticia-hero__titulo">{noticia.titulo}</h1>
        </div>
      </section>

      {/* ── CUERPO ── */}
      <div className="container">
        <div className="noticia-wrap">

          {/* Entradilla con borde dorado */}
          <p className="noticia-entradilla">{noticia.descripcionCorta}</p>

          {/* Párrafos */}
          <div className="noticia-cuerpo">
            {noticia.descripcionLarga.map((parrafo, idx) => (
              <p key={idx} className="noticia-parrafo">
                {parrafo}
              </p>
            ))}
          </div>

          {/* Volver */}
          <div className="noticia-volver">
            <Link to="/noticias" className="btn btn-morado">
              ← Volver a Noticias
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Noticia;