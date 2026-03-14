import { useState } from "react";
import preguntas from "../data/preguntas.json";
import "../css/Botones.css";

const theme = {
  bg: "#f4f1ea",
  cardBg: "#ffffff",
  primary: "#3c1a3d",
  accent: "#c5a059",
  text: "#2c2c2c",
  border: "#e3dfd7",
  fontSerif: '"Times New Roman", Times, serif',
  fontSans: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

function Juego() {
  const [preguntasAleatorias, setPreguntasAleatorias] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const [empezado, setEmpezado] = useState(false);
  const [dificultad, setDificultad] = useState(null);

  const seleccionarPreguntas = (nivel) => {
    const filtradas =
      nivel === "aleatorio"
        ? [...preguntas]
        : preguntas.filter((p) => p.dificultad === nivel);

    const seleccionadas = filtradas
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);

    setPreguntasAleatorias(seleccionadas);
    setPreguntaActual(0);
    setPuntuacion(0);
    setTerminado(false);
  };

  const handleRespuesta = (opcion) => {
    if (opcion === preguntasAleatorias[preguntaActual].respuestaCorrecta) {
      setPuntuacion((p) => p + 1);
    }

    if (preguntaActual + 1 < preguntasAleatorias.length) {
      setPreguntaActual((p) => p + 1);
    } else {
      setTerminado(true);
    }
  };

  const volverInicio = () => {
    setEmpezado(false);
    setTerminado(false);
    setDificultad(null);
    setPreguntasAleatorias([]);
    setPreguntaActual(0);
    setPuntuacion(0);
  };

  const resultado = () => {
    if (puntuacion <= 4)
      return {
        texto: "Nivel básico. Se recomienda repasar los contenidos.",
        color: "#7a1b1b",
      };
    if (puntuacion <= 6)
      return {
        texto: "Conocimientos aceptables. Buen punto de partida.",
        color: "#b08900",
      };
    if (puntuacion <= 8)
      return {
        texto: "Buen dominio de la Semana Santa de Sevilla.",
        color: theme.primary,
      };
    if (puntuacion === 9)
      return {
        texto: "Nivel avanzado. Excelente resultado.",
        color: theme.primary,
      };
    return {
      texto: "Dominio sobresaliente del patrimonio cofrade sevillano.",
      color: theme.accent,
    };
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: theme.bg,
        padding: "60px 20px",
        fontFamily: theme.fontSans,
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* INICIO */}
        {!empezado ? (
          <div
            style={{
              backgroundColor: theme.cardBg,
              borderRadius: "14px",
              border: `1px solid ${theme.border}`,
              padding: "50px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h1
                style={{
                  fontFamily: theme.fontSerif,
                  color: theme.primary,
                  fontSize: "2.6rem",
                  marginBottom: "8px",
                }}
              >
                Semana Santa de Sevilla
              </h1>

              <span
                style={{
                  display: "block",
                  letterSpacing: "3px",
                  fontSize: "0.75rem",
                  color: "#7a7a7a",
                  marginBottom: "18px",
                }}
              >
                CUESTIONARIO CULTURAL
              </span>

              <p
                style={{
                  color: "#6c757d",
                  maxWidth: "520px",
                  margin: "0 auto",
                }}
              >
                Evaluación interactiva sobre historia, hermandades y patrimonio
                cofrade.
              </p>
            </div>

            <div style={{ display: "grid", gap: "14px" }}>
              {[
                ["facil", "Nivel básico"],
                ["medio", "Nivel intermedio"],
                ["experto", "Nivel avanzado"],
                ["aleatorio", "Cuestionario mixto"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  className="btn-juego"
                  onClick={() => {
                    setDificultad(id);
                    seleccionarPreguntas(id);
                    setEmpezado(true);
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ) : !terminado ? (
          /* JUEGO */
          <div
            style={{
              backgroundColor: theme.cardBg,
              borderRadius: "14px",
              border: `1px solid ${theme.border}`,
              overflow: "hidden",
            }}
          >
            {/* Barra de progreso */}
            <div style={{ height: "6px", backgroundColor: "#e6e1da" }}>
              <div
                style={{
                  width: `${((preguntaActual + 1) / preguntasAleatorias.length) * 100
                    }%`,
                  height: "100%",
                  backgroundColor: theme.accent,
                  transition: "width 0.4s ease",
                }}
              />
            </div>

            <div style={{ padding: "50px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                  fontSize: "0.85rem",
                  color: "#6c757d",
                }}
              >
                <span>{dificultad}</span>
                <span>
                  Pregunta {preguntaActual + 1} /{" "}
                  {preguntasAleatorias.length}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: theme.fontSerif,
                  textAlign: "center",
                  marginBottom: "40px",
                  color: theme.primary,
                  fontSize: "1.9rem",
                  lineHeight: "1.4",
                }}
              >
                {preguntasAleatorias[preguntaActual]?.pregunta}
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: "14px",
                  marginBottom: "30px",
                }}
              >
                {preguntasAleatorias[preguntaActual]?.opciones.map(
                  (opcion, idx) => (
                    <button
                      key={idx}
                      className="btn-juego"
                      onClick={() => handleRespuesta(opcion)}
                    >
                      {opcion}
                    </button>
                  )
                )}
              </div>

              <div style={{ textAlign: "right" }}>
                <button
                  onClick={volverInicio}
                  className="btn-juego-outline"
                >
                  Volver al cuestionario
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* RESULTADO */
          <div
            style={{
              backgroundColor: theme.cardBg,
              borderRadius: "14px",
              border: `1px solid ${theme.border}`,
              padding: "50px",
              textAlign: "center",
              borderTop: `10px solid ${resultado().color}`,
            }}
          >
            <h2
              style={{
                fontFamily: theme.fontSerif,
                marginBottom: "10px",
                color: theme.primary,
              }}
            >
              Resultado final
            </h2>

            <div
              style={{
                fontSize: "3.2rem",
                fontWeight: "bold",
                color: resultado().color,
                marginBottom: "16px",
              }}
            >
              {puntuacion} / 10
            </div>

            <p
              style={{
                color: "#6c757d",
                fontSize: "1.05rem",
                maxWidth: "520px",
                margin: "0 auto 40px",
              }}
            >
              {resultado().texto}
            </p>

            <button
              className="btn-juego"
              onClick={volverInicio}
            >
              Volver al inicio
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Juego;
