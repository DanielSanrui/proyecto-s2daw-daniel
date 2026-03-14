import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import heroBg from "../img/hero.jpg";
import Contador from "../components/Contador";
import FAQ from "../components/FAQ";
import UltimasNoticias from "../components/UltimasNoticias";
import CalendarioHome from "../components/CalendarioHome";

export default function Home() {
  const [visible, setVisible] = useState(false);

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