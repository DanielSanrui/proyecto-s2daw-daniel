import React from "react";
import noticias from "../data/Noticias.json";
import CardNoticia from "../components/CardNoticia";

const Noticias = () => {
  return (
    <main className="container py-5">
      <h1 className="text-center mb-5 text-dark">Noticias</h1>
      {noticias.map((noticia) => (
        <CardNoticia key={noticia.id} noticia={noticia} />
      ))}
    </main>
  );
};

export default Noticias;
