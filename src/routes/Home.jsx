import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Contador from "../components/Contador";
import FAQ from "../components/FAQ";
import UltimasNoticias from "../components/UltimasNoticias";
export default function Home() {
  return (
    <div className="p-5">
      <section className="bg-white p-6 rounded shadow mb-8 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl fw-bold mb-2" style={{ color: "#3c1a3d" }}>
          Bienvenido a Sevilla en Pasos
        </h2>
        <p className="text-muted fs-5">
          Una guía interactiva para descubrir, sentir y entender la Semana Santa
          de Sevilla. <br />
          Aquí encontrarás toda la información sobre las hermandades, sus
          recorridos, días de salida, imágenes, historia, y mucho más. Todo en
          un solo lugar, accesible desde tu móvil y adaptado a ti.
        </p>
      </section>
      <UltimasNoticias />
      <Contador />
      <FAQ />
    </div>
  );
}
