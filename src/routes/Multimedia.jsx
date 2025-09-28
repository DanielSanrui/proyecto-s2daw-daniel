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
          className="btn px-4 py-2 fw-semibold"
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
          Fotos
        </button>

        <button
          onClick={() => setSeccion("videos")}
          className="btn px-4 py-2 fw-semibold"
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
          Vídeos
        </button>

        <button
          onClick={() => setSeccion("audios")}
          className="btn px-4 py-2 fw-semibold"
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
                  {video.tipo === "youtube" ? (
                    <iframe
                      src={video.url}
                      title={video.titulo}
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      controls
                      preload="metadata"
                      className="w-100"
                      poster={video.poster || ""}
                    >
                      <source src={video.url} type="video/mp4" />
                      Tu navegador no soporta el vídeo.
                    </video>
                  )}
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
