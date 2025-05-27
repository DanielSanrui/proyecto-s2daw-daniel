import React from "react";
import { useParams, Link } from "react-router-dom";
import noticias from "../data/Noticias.json";

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
    <div
      style={{ backgroundColor: "#3c1a3d", minHeight: "100vh", color: "white" }}
    >
      <div className="container py-5">
        <div className="bg-white text-dark rounded shadow overflow-hidden">
          <img
            src={noticia.imagen}
            alt={noticia.titulo}
            className="w-100 object-fit-cover"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <div className="p-4">
            <h1 className="h3 fw-bold">{noticia.titulo}</h1>
            <p className="text-muted mb-4">
              Publicado el {new Date(noticia.fecha).toLocaleDateString()}
            </p>

            {noticia.descripcionLarga.map((parrafo, idx) => (
              <p key={idx} className="mb-3 text-justify">
                {parrafo}
              </p>
            ))}

            <Link
              to="/noticias"
              className="btn mt-4 text-white"
              style={{ backgroundColor: "#3c1a3d" }}
            >
              ← Volver a Noticias
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
