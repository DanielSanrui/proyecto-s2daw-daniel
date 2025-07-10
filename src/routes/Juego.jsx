import { useState } from "react";
import preguntas from "../data/preguntas.json";

function Juego() {
  const [preguntasAleatorias, setPreguntasAleatorias] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const [empezado, setEmpezado] = useState(false);
  const [dificultad, setDificultad] = useState(null);

  const seleccionarPreguntas = (nivel) => {
    let filtradas;

    if (nivel === "aleatorio") {
      filtradas = [...preguntas];
    } else {
      filtradas = preguntas.filter((p) => p.dificultad === nivel);
    }

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
      setPuntuacion(puntuacion + 1);
    }

    if (preguntaActual + 1 < preguntasAleatorias.length) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      setTerminado(true);
    }
  };

  const volverAJugar = () => {
    seleccionarPreguntas(dificultad);
    setEmpezado(false);
  };

  const obtenerMensaje = () => {
    if (puntuacion <= 4)
      return { texto: "Suspenso ¡Toca repasar!", color: "danger" };
    if (puntuacion <= 6)
      return { texto: "Aprobado ¡Puedes mejorar!", color: "warning" };
    if (puntuacion <= 8) return { texto: "Notable ¡Muy bien!", color: "info" };
    if (puntuacion === 9)
      return {
        texto: "Sobresaliente ¡Excelente resultado!",
        color: "success",
      };
    return {
      texto: "¡Excelente!!! Eres un genio de la Semana Santa de Sevilla.",
      color: "primary",
    };
  };

  const formatearTextoDificultad = (nivel) => {
    switch (nivel) {
      case "facil":
        return "Fácil";
      case "medio":
        return "Medio";
      case "experto":
        return "Experto";
      case "aleatorio":
        return "Aleatorio";
      default:
        return "";
    }
  };

  return (
    <div className="container py-5">
      {!empezado ? (
        <div
          className="card shadow-lg mx-auto p-5 text-center"
          style={{
            maxWidth: "600px",
            borderRadius: "1rem",
            backgroundColor: "#f9f5f3",
            border: "1px solid #e0d6d0",
          }}
        >
          <h2 className="mb-4 fw-bold text-dark" style={{ fontSize: "2.2rem" }}>
            ¿Cuánto sabes de la Semana Santa de Sevilla?
          </h2>
          <p className="mb-4 fs-5 text-secondary">
            Selecciona un nivel de dificultad para comenzar el cuestionario.
          </p>

          <div className="d-grid gap-3">
            <button
              className="btn btn-lg rounded-pill text-white shadow-sm"
              style={{ backgroundColor: "#4c3575" }} // morado
              onClick={() => {
                setDificultad("facil");
                seleccionarPreguntas("facil");
                setEmpezado(true);
              }}
            >
              Nivel Fácil
            </button>
            <button
              className="btn btn-lg rounded-pill text-white shadow-sm"
              style={{ backgroundColor: "#8b0000" }} // granate oscuro
              onClick={() => {
                setDificultad("medio");
                seleccionarPreguntas("medio");
                setEmpezado(true);
              }}
            >
              Nivel Medio
            </button>
            <button
              className="btn btn-lg rounded-pill text-white shadow-sm"
              style={{ backgroundColor: "#000" }} // negro
              onClick={() => {
                setDificultad("experto");
                seleccionarPreguntas("experto");
                setEmpezado(true);
              }}
            >
              Nivel Experto
            </button>
            <button
              className="btn btn-lg rounded-pill text-white shadow-sm"
              style={{ backgroundColor: "#b19756" }} // dorado envejecido
              onClick={() => {
                setDificultad("aleatorio");
                seleccionarPreguntas("aleatorio");
                setEmpezado(true);
              }}
            >
              Modo Aleatorio
            </button>
          </div>
        </div>
      ) : !terminado ? (
        <div
          className="card shadow-lg p-5"
          style={{
            borderRadius: "1rem",
            backgroundColor: "#ffffff",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span
              className="px-3 py-2 text-white rounded"
              style={{ backgroundColor: "#4c3575", fontWeight: 500 }}
            >
              Nivel: {formatearTextoDificultad(dificultad)}
            </span>
            <span className="text-muted small">
              Pregunta {preguntaActual + 1} de {preguntasAleatorias.length}
            </span>
          </div>

          <h4
            className="fw-bold text-dark mb-4"
            style={{ textAlign: "center", fontSize: "1.5rem" }}
          >
            {preguntasAleatorias[preguntaActual]?.pregunta}
          </h4>

          <div className="d-grid gap-3">
            {preguntasAleatorias[preguntaActual]?.opciones.map(
              (opcion, idx) => (
                <button
                  key={idx}
                  className="btn btn-outline-dark btn-lg rounded-pill shadow-sm"
                  onClick={() => handleRespuesta(opcion)}
                >
                  {opcion}
                </button>
              )
            )}
          </div>
        </div>
      ) : (
        <div
          className={`alert text-center p-5 shadow-lg`}
          style={{
            borderRadius: "1rem",
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#f4f0ec",
            borderLeft: `8px solid ${
              obtenerMensaje().color === "success"
                ? "#4c3575"
                : obtenerMensaje().color === "warning"
                ? "#b19756"
                : "#8b0000"
            }`,
          }}
        >
          <h2 className="fw-bold mb-3 text-dark">
            Has obtenido {puntuacion}/10
          </h2>
          <p className="fs-5 text-secondary">{obtenerMensaje().texto}</p>
          <button
            className="btn btn-dark mt-4 btn-lg rounded-pill"
            onClick={volverAJugar}
          >
            Volver a empezar
          </button>
        </div>
      )}
    </div>
  );
}

export default Juego;
