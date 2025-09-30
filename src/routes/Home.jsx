import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Contador from "../components/Contador";
import FAQ from "../components/FAQ";
import UltimasNoticias from "../components/UltimasNoticias";
import CalendarioHome from "../components/CalendarioHome";
export default function Home() {
  return (
    <div className="p-5">
      <section
        className="bg-white shadow mb-5 text-center p-4"
        style={{ width: "100%", padding: "2rem" }}
      >
        <h2 className="text-3xl fw-bold mb-3" style={{ color: "#3c1a3d" }}>
          Bienvenido a Sevilla en Pasos
        </h2>
        <p className="text-muted fs-5 mb-0">
          Una guía interactiva para descubrir, sentir y entender la Semana Santa
          de Sevilla. <br />
          Aquí encontrarás toda la información sobre las hermandades, sus
          recorridos, días de salida, imágenes, historia, y mucho más. Todo en
          un solo lugar, accesible desde tu móvil y adaptado a ti.
        </p>
      </section>

      <UltimasNoticias />
      <CalendarioHome />
      <Contador />
      <FAQ />
    </div>
  );
}
