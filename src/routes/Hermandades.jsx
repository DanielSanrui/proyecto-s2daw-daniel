import React, { useEffect, useState } from "react";
import hermandadesData from "../data/Hermandades.json";
import CardHermandad from "../components/CardHermandad";

function Hermandades() {
  const [hermandades, setHermandades] = useState([]);
  const [filtros, setFiltros] = useState({
    dia: "Todos",
    hermanos: "Todos",
    nazarenos: "Todos",
    antiguedad: "Todos",
  });

  useEffect(() => {
    setHermandades(hermandadesData);
  }, []);

  const aplicarFiltros = () => {
    return hermandades.filter((h) => {
      const diaOk = filtros.dia === "Todos" || h.diaSalida === filtros.dia;

      const hermanos = parseInt(h.hermanos);
      const hermanosOk =
        filtros.hermanos === "Todos" ||
        (filtros.hermanos === "Menos de 500" && hermanos < 500) ||
        (filtros.hermanos === "500 - 1500" &&
          hermanos >= 500 &&
          hermanos <= 1500) ||
        (filtros.hermanos === "1500 - 3000" &&
          hermanos > 1500 &&
          hermanos <= 3000) ||
        (filtros.hermanos === "Más de 3000" && hermanos > 3000);

      const nazarenos = parseInt(h.nazarenos);
      const nazarenosOk =
        filtros.nazarenos === "Todos" ||
        (filtros.nazarenos === "Menos de 300" && nazarenos < 300) ||
        (filtros.nazarenos === "300 - 800" &&
          nazarenos >= 300 &&
          nazarenos <= 800) ||
        (filtros.nazarenos === "800 - 1500" &&
          nazarenos > 800 &&
          nazarenos <= 1500) ||
        (filtros.nazarenos === "Más de 1500" && nazarenos > 1500);

      const fundacion = parseInt(h.fundacion);
      const antiguedadOk =
        filtros.antiguedad === "Todos" ||
        (filtros.antiguedad === "Antes del siglo XVIII" && fundacion < 1700) ||
        (filtros.antiguedad === "S. XVIII - XIX" &&
          fundacion >= 1700 &&
          fundacion <= 1899) ||
        (filtros.antiguedad === "S. XX - XXI" && fundacion >= 1900);

      return diaOk && hermanosOk && nazarenosOk && antiguedadOk;
    });
  };

  const handleFiltro = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-5">
      <h1
        className="text-center text-4xl fw-bold mb-4"
        style={{ color: "#3c1a3d" }}
      >
        Hermandades
      </h1>

      <div className="bg-white rounded shadow p-4 mb-4 border">
        <h2 className="fs-4 fw-semibold mb-3" style={{ color: "#3c1a3d" }}>
          Filtrar por:
        </h2>
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label">Día de salida</label>
            <select name="dia" className="form-select" onChange={handleFiltro}>
              <option>Todos</option>
              <option>Domingo de Ramos</option>
              <option>Lunes Santo</option>
              <option>Martes Santo</option>
              <option>Miércoles Santo</option>
              <option>Jueves Santo</option>
              <option>La Madrugá</option>
              <option>Viernes Santo</option>
              <option>Sábado Santo</option>
              <option>Domingo de Resurrección</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Nº de hermanos</label>
            <select
              name="hermanos"
              className="form-select"
              onChange={handleFiltro}
            >
              <option>Todos</option>
              <option>Menos de 500</option>
              <option>500 - 1500</option>
              <option>1500 - 3000</option>
              <option>Más de 3000</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Nº de nazarenos</label>
            <select
              name="nazarenos"
              className="form-select"
              onChange={handleFiltro}
            >
              <option>Todos</option>
              <option>Menos de 300</option>
              <option>300 - 800</option>
              <option>800 - 1500</option>
              <option>Más de 1500</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Antigüedad</label>
            <select
              name="antiguedad"
              className="form-select"
              onChange={handleFiltro}
            >
              <option>Todos</option>
              <option>Antes del siglo XVIII</option>
              <option>S. XVIII - XIX</option>
              <option>S. XX - XXI</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {aplicarFiltros().map((hermandad, idx) => (
          <div className="col-12" key={idx}>
            <CardHermandad hermandad={hermandad} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hermandades;
