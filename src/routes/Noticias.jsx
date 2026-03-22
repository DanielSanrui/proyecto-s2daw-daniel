import React from "react";
import noticias from "../data/Noticias.json";
import CardNoticia from "../components/CardNoticia";
import "../css/Noticias.css";

const Noticias = () => {
  const noticiasOrdenadas = [...noticias].sort(
    (a, b) => new Date(b.fecha) - new Date(a.fecha)
  );

  return (
    <main>
      {/* ── CABECERA ── */}
      <section className="noticias-header">
        <div className="noticias-header__overlay" />
        <div className="noticias-header__contenido">
          <h1 className="noticias-header__titulo">Noticias</h1>
          <div className="noticias-header__linea" />
          <p className="noticias-header__subtitulo">
            Toda la actualidad de la Semana Santa de Sevilla
          </p>
        </div>
      </section>

      <div className="container py-5">
        <div className="row gy-4">
          {noticiasOrdenadas.map((noticia) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={noticia.id}>
              <CardNoticia noticia={noticia} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Noticias;