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
      const hoyISO = ahora.toISOString().split("T")[0];

      if (diasSemanaSanta[hoyISO]) {
        setMensajeDia(diasSemanaSanta[hoyISO].nombre);
        setEnlace(diasSemanaSanta[hoyISO].ruta);
        setTiempoRestante("");
        return;
      }

      const diferencia = fechaDomingoRamos - ahora.getTime();

      if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        setTiempoRestante(`${dias} días · ${horas}h ${minutos}m ${segundos}s`);
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
  }, []);

  return (
    <section className="py-5 text-center" style={{ backgroundColor: "#3c1a3d" }}>
      <div className="container">
        <h2
          className="mb-4 text-uppercase fw-semibold"
          style={{
            color: "#f5e6c8",
            letterSpacing: "2px",
            fontFamily: "'Cinzel', serif",
          }}
        >
          Cuenta atrás para la Semana Santa
        </h2>

        <div
          className="fw-bold text-uppercase"
          style={{
            color: "#ffffff",
            fontSize: "2.4rem",        // ⬅️ más grande
            letterSpacing: "2px",      // ⬅️ más empaque visual
            fontFamily: "'Cinzel', serif",
            fontWeight: 800,           // ⬅️ más gordo
            WebkitTextStroke: "1.2px #c9a24d",
            textShadow: "0px 4px 8px rgba(0,0,0,0.6)",
            lineHeight: "1.4",
          }}
        >
          {mensajeDia || tiempoRestante}
        </div>



        {enlace && (
          <div className="mt-4">
            <Link
              to={enlace}
              className="btn rounded-pill px-4"
              style={{
                border: "2px solid #c9a24d",
                color: "#f5e6c8",
                letterSpacing: "1px",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#712b7bff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              Ver procesiones de hoy
            </Link>

          </div>
        )}
      </div>
    </section>
  );
};

export default Contador;
