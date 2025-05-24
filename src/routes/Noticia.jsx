import React from "react";
import { useParams } from "react-router-dom";
import noticias from "../data/Noticias.json";

const Noticia = () => {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === id);

  if (!noticia) {
    return (
      <div className="container py-5 text-center">
        <h2>Noticia no encontrada</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">{noticia.titulo}</h1>
      <img
        src={noticia.imagen}
        alt={noticia.titulo}
        className="img-fluid rounded mb-4"
      />
      <p className="text-muted">{noticia.fecha}</p>
      <p className="fs-5">{noticia.descripcionLarga}</p>
    </div>
  );
};

export default Noticia;
