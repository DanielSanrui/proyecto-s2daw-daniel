import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contador = () => {
  const [tiempoRestante, setTiempoRestante] = useState("");
  const [mensajeDia, setMensajeDia] = useState("");
  const [enlace, setEnlace] = useState("");

  const diasSemanaSanta = {
    "2026-03-29": {
      nombre: "¡Ya estamos en Semana Santa! Hoy es Domingo de Ramos",
      ruta: "/dias/domingo-de-ramos",
    },
    "2026-03-30": { nombre: "Hoy es Lunes Santo", ruta: "/dias/lunes-santo" },
    "2026-03-31": { nombre: "Hoy es Martes Santo", ruta: "/dias/martes-santo" },
    "2026-04-01": {
      nombre: "Hoy es Miércoles Santo",
      ruta: "/dias/miercoles-santo",
    },
    "2026-04-02": { nombre: "Hoy es Jueves Santo", ruta: "/dias/jueves-santo" },
    "2026-04-03": {
      nombre: "Hoy es Viernes Santo",
      ruta: "/dias/viernes-santo",
    },
    "2026-04-04": { nombre: "Hoy es Sábado Santo", ruta: "/dias/sabado-santo" },
    "2026-04-05": {
      nombre: "¡Hoy es Domingo de Resurrección!",
      ruta: "/dias/domingo-de-resurreccion",
    },
  };

  useEffect(() => {
    const fechaDomingoRamos = new Date("2026-03-29T00:00:00").getTime();

    const intervalo = setInterval(() => {
      const ahora = new Date();
      const ahoraMs = ahora.getTime();
      const hoyISO = ahora.toISOString().split("T")[0];

      if (diasSemanaSanta[hoyISO]) {
        setMensajeDia(diasSemanaSanta[hoyISO].nombre);
        setEnlace(diasSemanaSanta[hoyISO].ruta);
        setTiempoRestante("");
        return;
      }

      const diferencia = fechaDomingoRamos - ahoraMs;

      if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor(
          (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutos = Math.floor(
          (diferencia % (1000 * 60 * 60)) / (1000 * 60)
        );
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        setTiempoRestante(`${dias} días, ${horas}h ${minutos}m ${segundos}s`);
        setMensajeDia("");
        setEnlace("");
      } else {
        setTiempoRestante("Semana Santa finalizada. ¡Hasta el año que viene!");
        setMensajeDia("");
        setEnlace("");
        clearInterval(intervalo);
      }
    }, 1000);

    return () => clearInterval(intervalo);
  });

  return (
    <section
      className="text-center py-5 text-white"
      style={{ backgroundColor: "#3c1a3d" }}
    >
      <h2 className="h4 fw-bold mb-3">Cuenta atrás para la Semana Santa</h2>
      <div
        className="bg-white text-dark rounded shadow-sm d-inline-block px-4 py-3 mb-2 fw-monospace"
        style={{ color: "#3c1a3d" }}
      >
        {mensajeDia || tiempoRestante}
      </div>
      {enlace && (
        <div className="mt-3">
          <Link to={enlace} className="btn btn-outline-light fw-semibold">
            Ver procesiones de hoy
          </Link>
        </div>
      )}
    </section>
  );
};

export default Contador;
