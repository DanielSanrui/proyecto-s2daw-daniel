import React, { useState } from "react";
import multimedia from "../data/Multimedia.json";

const Multimedia = () => {
  const [seccion, setSeccion] = useState("fotos");

  return (
    <main className="container py-5">
      <h1
        className="text-center mb-4 text-4xl fw-bold"
        style={{ color: "#3c1a3d" }}
      >
        Galería Multimedia
      </h1>

      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        <button
          onClick={() => setSeccion("fotos")}
          className="btn"
          style={{ backgroundColor: "#3c1a3d", color: "#fff" }}
        >
          Fotos
        </button>
        <button
          onClick={() => setSeccion("videos")}
          className="btn"
          style={{ backgroundColor: "#3c1a3d", color: "#fff" }}
        >
          Vídeos
        </button>
        <button
          onClick={() => setSeccion("audios")}
          className="btn"
          style={{ backgroundColor: "#3c1a3d", color: "#fff" }}
        >
          Marchas
        </button>
      </div>

      {seccion === "fotos" && (
        <div className="row g-4">
          {multimedia.fotos.map((foto, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={foto.imagen}
                  alt={foto.titulo}
                  className="card-img-top object-fit-cover"
                />
                <div className="card-body">
                  <h5 className="card-title">{foto.titulo}</h5>
                  <p className="card-text">{foto.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {seccion === "videos" && (
        <div className="row g-4">
          {multimedia.videos.map((video, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={video.url}
                    title={video.titulo}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{video.titulo}</h5>
                  <p className="card-text">{video.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* AUDIOS */}
      {seccion === "audios" && (
        <div className="row g-4">
          {multimedia.audios.map((audio, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 shadow-sm p-3">
                <h5 className="card-title">{audio.titulo}</h5>
                <p className="card-text">{audio.descripcion}</p>
                <audio controls className="w-100">
                  <source src={audio.audio} type="audio/mp3" />
                  Tu navegador no soporta el audio.
                </audio>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Multimedia;
