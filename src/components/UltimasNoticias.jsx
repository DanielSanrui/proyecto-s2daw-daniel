import React from "react";
import { Link } from "react-router-dom";
import noticias from "../data/Noticias.json";
import CardNoticia from "./CardNoticia";
import "../css/Botones.css";
import "../css/CalendarioHome.css";

const UltimasNoticias = () => {
  const noticiasOrdenadas = [...noticias].sort((a, b) => {
    const fechaA = new Date(a.fecha);
    const fechaB = new Date(b.fecha);
    return fechaB - fechaA;
  });

  const ultimasSeis = noticiasOrdenadas.slice(0, 6);

  return (
    <section className="py-5 text-white" style={{ backgroundColor: "#3c1a3d" }}>
      <div className="container">
        <h2 className="text-center mb-5 fs-2 calendario-titulo">
          Últimas noticias
        </h2>
        <div className="row g-4">
          {ultimasSeis.map((noticia) => (
            <div className="col-12 col-md-6 col-lg-4" key={noticia.id}>
              <CardNoticia noticia={noticia} />
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link
            to="/noticias"
            className="btn btn-dorado-outline rounded-pill px-4"
          >
            Ver todas las noticias
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimasNoticias;
