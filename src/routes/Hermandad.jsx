import React from "react";
import { useParams, Link } from "react-router-dom";
import hermandades from "../data/Hermandades.json";
import TablaRecorrido from "../components/TablaRecorrido";

const Hermandad = () => {
  const { slug } = useParams();
  const hermandad = hermandades.find((h) => h.slug === slug);

  if (!hermandad) {
    return (
      <div className="container py-5">
        <h1 className="text-center text-danger">Hermandad no encontrada</h1>
        <Link to="/hermandades" className="btn btn-dark mt-4">
          Volver a Hermandades
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5 text-dark">
      <h1 className="display-5 fw-bold mb-4">{hermandad.nombre}</h1>

      <div className="row mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={hermandad.imagenPrincipal}
            alt={hermandad.nombre}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p>
            <strong>Año de fundación:</strong> {hermandad.fundacion}
          </p>
          <p>
            <strong>N.º de hermanos:</strong>{" "}
            {hermandad.hermanos.toLocaleString()}
          </p>
          <p>
            <strong>N.º de nazarenos:</strong>{" "}
            {hermandad.nazarenos.toLocaleString()}
          </p>
          <p>
            <strong>Sede:</strong> {hermandad.sede}
          </p>
          <p>
            <strong>Barrio:</strong> {hermandad.barrio}
          </p>
        </div>
      </div>

      <h2 className="h4 mb-3">Imágenes Titulares</h2>
      <div className="row g-4 mb-5">
        {hermandad.imagenes.map((img, index) => (
          <div className="col-md-6" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={img.imagen} alt={img.titulo} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">{img.titulo}</h5>
                <p className="card-text text-muted">
                  <strong>Escultor:</strong> {img.escultor}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="h4 mb-3">Historia</h2>
      {hermandad.descripcion.map((apartado, i) => (
        <div key={i} className="mb-4">
          <h5 className="fw-semibold">{apartado.titulo}</h5>
          {apartado.texto.map((parrafo, j) => (
            <p className="text-justify" key={j}>
              {parrafo}
            </p>
          ))}
        </div>
      ))}
      <TablaRecorrido slug={hermandad.slug} />

      <div className="mt-4">
        <Link to="/hermandades" className="btn btn-outline-dark">
          ← Volver a Hermandades
        </Link>
      </div>
    </div>
  );
};

export default Hermandad;
