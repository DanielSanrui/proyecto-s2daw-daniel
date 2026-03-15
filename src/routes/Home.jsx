import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Contador from "../components/Contador";
import FAQ from "../components/FAQ";
import UltimasNoticias from "../components/UltimasNoticias";
import CalendarioHome from "../components/CalendarioHome";

const imagenesHero = [
  "https://res.cloudinary.com/dn76ni2ay/image/upload/v1773537613/TresCaidas-Hero_randbh.jpg",
  "https://res.cloudinary.com/dn76ni2ay/image/upload/v1773537613/SanGonzalo2-Hero_ufawno.jpg",
  "https://res.cloudinary.com/dn76ni2ay/image/upload/v1773537613/LasPenas-Hero_ouanxc.jpg",
  "https://res.cloudinary.com/dn76ni2ay/image/upload/v1773537613/EsperanzaTriana-Hero_rht5wm.jpg",
  "https://res.cloudinary.com/dn76ni2ay/image/upload/v1773537613/SanGonzalo1-Hero_cqaihf.jpg",
];

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [heroBg] = useState(
    () => imagenesHero[Math.floor(Math.random() * imagenesHero.length)]
  );

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero__overlay" />

        <div className={`hero__contenido ${visible ? "hero__contenido--visible" : ""}`}>
          <p className="hero__subtag">Sevilla · Semana Santa 2026</p>
          <h1 className="hero__titulo">Sevilla en Pasos</h1>
          <div className="hero__linea" />
          <p className="hero__descripcion">
            Descubre, siente y entiende la Semana Santa de Sevilla.
            Hermandades, recorridos, historia y mucho más, todo en un solo lugar.
          </p>
          <Link to="/hermandades" className="hero__boton">
            Explorar hermandades
          </Link>
        </div>

        <div className="hero__scroll">
          <span className="hero__scroll-texto">Descubre</span>
          <div className="hero__scroll-linea" />
        </div>
      </section>

      {/* ── RESTO DE SECCIONES ── */}
      <UltimasNoticias />
      <CalendarioHome />
      <Contador />
      <div className="home__spacer" />
      <FAQ />
    </div>
  );
}