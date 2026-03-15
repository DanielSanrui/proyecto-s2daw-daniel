import React, { useState } from "react";
import multimedia from "../data/Multimedia.json";
import "../css/Multimedia.css";

const Multimedia = () => {
  const [seccion, setSeccion] = useState("fotos");
  const [lightbox, setLightbox] = useState(null);

  const tabs = [
    { id: "fotos", label: "Fotos" },
    { id: "videos", label: "Vídeos" },
    { id: "audios", label: "Marchas" },
  ];

  return (
    <main>
      {/* ── CABECERA ── */}
      <section className="multimedia-header">
        <div className="multimedia-header__overlay" />
        <div className="multimedia-header__contenido">
          <h1 className="multimedia-header__titulo">Galería Multimedia</h1>
          <div className="multimedia-header__linea" />
          <p className="multimedia-header__subtitulo">
            Fotos, vídeos y marchas de la Semana Santa de Sevilla
          </p>
        </div>
      </section>

      <div className="container py-5">
        {/* ── TABS ── */}
        <div className="multimedia-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSeccion(tab.id)}
              className={`multimedia-tab ${seccion === tab.id ? "multimedia-tab--activo" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── FOTOS MASONRY ── */}
        {seccion === "fotos" && (
          <div className="masonry">
            {multimedia.fotos.map((foto, index) => (
              <div
                key={index}
                className="masonry__item"
                onClick={() => setLightbox(foto)}
              >
                <img
                  src={foto.imagen}
                  alt={foto.titulo}
                  className="masonry__img"
                />
                <div className="masonry__overlay">
                  <p className="masonry__titulo">{foto.titulo}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── VÍDEOS ── */}
        {seccion === "videos" && (
          <div className="row g-4">
            {multimedia.videos.map((video, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="multimedia-video">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={video.url}
                      title={video.titulo}
                      allowFullScreen
                    />
                  </div>
                  <div className="multimedia-video__body">
                    <h5 className="multimedia-video__titulo">{video.titulo}</h5>
                    <p className="multimedia-video__desc">{video.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── AUDIOS ── */}
        {seccion === "audios" && (
          <div className="row g-4">
            {multimedia.audios.map((audio, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="multimedia-audio">
                  <div className="multimedia-audio__icono">♪</div>
                  <div className="multimedia-audio__info">
                    <h5 className="multimedia-audio__titulo">{audio.titulo}</h5>
                    <p className="multimedia-audio__desc">{audio.descripcion}</p>
                    <audio controls className="multimedia-audio__player">
                      <source src={audio.audio} type="audio/mp4" />
                      Tu navegador no soporta el audio.
                    </audio>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__cerrar" onClick={() => setLightbox(null)}>✕</button>
            <img
              src={lightbox.imagen}
              alt={lightbox.titulo}
              className="lightbox__img"
            />
            <div className="lightbox__info">
              <h5 className="lightbox__titulo">{lightbox.titulo}</h5>
              <p className="lightbox__desc">{lightbox.descripcion}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Multimedia;