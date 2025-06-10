import { useEffect, useState } from "react";
import preguntas from "../data/preguntas.json";

function Juego() {
  const [preguntasAleatorias, setPreguntasAleatorias] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const [empezado, setEmpezado] = useState(false);

  useEffect(() => {
    const aleatorias = [...preguntas]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setPreguntasAleatorias(aleatorias);
  }, []);

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
    const nuevas = [...preguntas].sort(() => 0.5 - Math.random()).slice(0, 10);
    setPreguntasAleatorias(nuevas);
    setPreguntaActual(0);
    setPuntuacion(0);
    setTerminado(false);
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

  return (
    <div className="container py-5 text-center">
      {!empezado ? (
        <div className="card p-5 shadow mx-auto" style={{ maxWidth: "600px" }}>
          <h2 className="mb-4 fw-bold" style={{ color: "#3c1a3d" }}>
            ¿Cuánto sabes de la Semana Santa de Sevilla?
          </h2>
          <p className="mb-4">
            Responde a 10 preguntas y demuestra tus conocimientos cofrades.
          </p>
          <button
            className="btn btn-lg"
            style={{ backgroundColor: "#3c1a3d", color: "white" }}
            onClick={() => setEmpezado(true)}
          >
            Comenzar el juego
          </button>
        </div>
      ) : !terminado ? (
        <div className="card shadow p-4">
          <h4 className="mb-3">
            Pregunta {preguntaActual + 1} de {preguntasAleatorias.length}
          </h4>
          <p className="fw-bold">
            {preguntasAleatorias[preguntaActual]?.pregunta}
          </p>

          <div className="list-group mt-3">
            {preguntasAleatorias[preguntaActual]?.opciones.map(
              (opcion, idx) => (
                <button
                  key={idx}
                  className="list-group-item list-group-item-action"
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
          className={`alert alert-${obtenerMensaje().color} text-center p-5`}
        >
          <h2>Has obtenido {puntuacion}/10</h2>
          <p className="mt-3">{obtenerMensaje().texto}</p>
          <button
            className="btn btn-outline-dark mt-4"
            onClick={() => {
              volverAJugar();
              setEmpezado(false);
            }}
          >
            Volver al inicio
          </button>
        </div>
      )}
    </div>
  );
}

export default Juego;
