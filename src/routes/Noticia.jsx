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
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        color: "#3c1a3d",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div className="container py-5">
        <div
          className="rounded shadow-lg overflow-hidden"
          style={{
            backgroundColor: "white",
            border: "1px solid #ddd",
          }}
        >
          {/* Imagen centrada y más pequeña */}
          <div
            style={{
              backgroundColor: "#f4f4f4",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <img
              src={noticia.imagen}
              alt={noticia.titulo}
              style={{
                maxWidth: "80%", // Más pequeña que el ancho completo
                height: "auto",
                objectFit: "contain",
                borderRadius: "0.5rem",
              }}
            />
          </div>

          {/* Contenido */}
          <div className="p-4">
            <h1 className="fw-bold" style={{ color: "#3c1a3d" }}>
              {noticia.titulo}
            </h1>
            <p className="text-muted mb-4">
              Publicado el {new Date(noticia.fecha).toLocaleDateString()}
            </p>

            {noticia.descripcionLarga.map((parrafo, idx) => (
              <p key={idx} className="mb-3" style={{ textAlign: "justify" }}>
                {parrafo}
              </p>
            ))}

            <Link
              to="/noticias"
              className="btn mt-4"
              style={{
                backgroundColor: "#3c1a3d",
                color: "white",
                border: "none",
                padding: "0.5rem 1.25rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
              }}
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
