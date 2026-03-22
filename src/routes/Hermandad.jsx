import React from "react";
import { useParams, Link } from "react-router-dom";
import hermandades from "../data/Hermandades.json";
import TablaRecorrido from "../components/TablaRecorrido.jsx";
import MapaComponente from "../components/MapaComponente";
import recorridosMapa from "../data/RecorridosMapa.json";
import "../css/Botones.css";
import "../css/Hermandad.css";

const Hermandad = () => {
  const { slug } = useParams();
  const hermandad = hermandades.find((h) => h.slug === slug);
  const recorrido = recorridosMapa[slug];

  if (!hermandad) {
    return (
      <div className="container py-5">
        <h1 className="text-center text-danger">Hermandad no encontrada</h1>
        <Link to="/hermandades" className="btn btn-morado mt-4">
          Volver a Hermandades
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* ── HERO ── */}
      <section className="hermandad-hero">
        <img
          src={hermandad.imagenPrincipal}
          alt={hermandad.nombre}
          className="hermandad-hero__foto"
        />
        <div className="hermandad-hero__overlay" />
        <div className="hermandad-hero__contenido">
          <h1 className="hermandad-hero__titulo">{hermandad.nombre}</h1>
          <div className="hermandad-hero__linea" />
          <p className="hermandad-hero__subtag">
            {hermandad.barrio} · {hermandad.diaSalida}
          </p>
        </div>
      </section>

      <div className="container py-5 hermandad-page">

        {/* ── FICHA ── */}
        <div className="hermandad-ficha">
          <h2 className="hermandad-section-titulo">Datos de la hermandad</h2>
          <div className="hermandad-ficha__grid">
            <div className="hermandad-ficha__item">
              <span className="hermandad-ficha__label">Fundación</span>
              <span className="hermandad-ficha__valor">{hermandad.fundacion}</span>
            </div>
            <div className="hermandad-ficha__item">
              <span className="hermandad-ficha__label">Hermanos</span>
              <span className="hermandad-ficha__valor">{hermandad.hermanos.toLocaleString()}</span>
            </div>
            <div className="hermandad-ficha__item">
              <span className="hermandad-ficha__label">Nazarenos</span>
              <span className="hermandad-ficha__valor">{hermandad.nazarenos.toLocaleString()}</span>
            </div>
            <div className="hermandad-ficha__item">
              <span className="hermandad-ficha__label">Sede</span>
              <span className="hermandad-ficha__valor">{hermandad.sede}</span>
            </div>
            <div className="hermandad-ficha__item">
              <span className="hermandad-ficha__label">Barrio</span>
              <span className="hermandad-ficha__valor">{hermandad.barrio}</span>
            </div>
          </div>
        </div>

        {/* ── IMÁGENES TITULARES ── */}
        <h2 className="hermandad-section-titulo">Imágenes Titulares</h2>
        <div className="row g-4 mb-5">
          {hermandad.imagenes.map((img, index) => (
            <div className="col-md-6" key={index}>
              <div className="hermandad-imagen-card">
                <div className="hermandad-imagen-card__wrap">
                  <img
                    src={img.imagen}
                    alt={img.titulo}
                    className="hermandad-imagen-card__img"
                  />
                  <div className="hermandad-imagen-card__overlay" />
                </div>
                <div className="hermandad-imagen-card__body">
                  <h5 className="hermandad-imagen-card__titulo">{img.titulo}</h5>
                  <p className="hermandad-imagen-card__escultor">
                    <span className="hermandad-imagen-card__label">Escultor:</span> {img.escultor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── HISTORIA ── */}
        <h2 className="hermandad-section-titulo">Historia</h2>
        <div className="hermandad-historia mb-5">
          {hermandad.descripcion.map((apartado, i) => (
            <div key={i} className="hermandad-historia__apartado">
              <h5 className="hermandad-historia__subtitulo">{apartado.titulo}</h5>
              {apartado.texto.map((parrafo, j) => (
                <p key={j} className="hermandad-historia__parrafo">{parrafo}</p>
              ))}
            </div>
          ))}
        </div>

        {/* ── RECORRIDO ── */}
        <TablaRecorrido slug={hermandad.slug} />
        {recorrido && <MapaComponente recorrido={recorrido} />}

        {/* ── VOLVER ── */}
        <div className="mt-4">
          <Link to="/hermandades" className="btn btn-morado">
            ← Volver a Hermandades
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Hermandad;