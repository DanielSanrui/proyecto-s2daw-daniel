import React from "react";
import noticias from "../data/Noticias.json";
import CardNoticia from "../components/CardNoticia";

const Noticias = () => {
  return (
    <main className="container py-5">
      <h1
        className="text-center mb-4 display-5 fw-bold"
        style={{ color: " #3c1a3d" }}
      >
        Noticias
      </h1>

      <div className="row gy-4">
        {noticias.map((noticia) => (
          <div className="col-12 col-md-6 col-lg-4" key={noticia.id}>
            <CardNoticia noticia={noticia} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Noticias;
