import React, { useEffect, useState } from "react";

const Tiempo = () => {
  const [climaActual, setClimaActual] = useState(null);
  const [pronostico, setPronostico] = useState([]);

  const weatherEmojis = {
    0: "☀️ Despejado",
    1: "🌤️ Soleado con algunas nubes",
    2: "🌥️ Parcialmente nublado",
    3: "☁️ Nublado",
    45: "🌫️ Niebla",
    48: "🌫️ Niebla con escarcha",
    51: "🌦️ Llovizna ligera",
    53: "🌦️ Llovizna moderada",
    55: "🌦️ Llovizna intensa",
    61: "🌧️ Lluvia ligera",
    63: "🌧️ Lluvia moderada",
    65: "🌧️ Lluvia fuerte",
    80: "🌧️ Lluvia intermitente ligera",
    81: "🌧️ Lluvia intermitente moderada",
    82: "🌧️ Lluvia intermitente fuerte",
    95: "⛈️ Tormenta",
    96: "⛈️ Tormenta con granizo leve",
    99: "⛈️ Tormenta con granizo fuerte",
  };

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=37.39&longitude=-5.99&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&current_weather=true&timezone=Europe/Madrid"
    )
      .then((res) => res.json())
      .then((data) => {
        setClimaActual({
          temperatura: data.current_weather.temperature,
          viento: data.current_weather.windspeed,
          codigo: data.current_weather.weathercode,
        });

        const dias = data.daily.time.map((fecha, i) => ({
          fecha,
          max: data.daily.temperature_2m_max[i],
          min: data.daily.temperature_2m_min[i],
          lluvia: data.daily.precipitation_sum[i],
          codigo: data.daily.weathercode[i],
        }));

        setPronostico(dias);
      });
  }, []);

  return (
    <div className="container py-5 text-[#3c1a3d]">
      <h1 className="text-center mb-4">El Tiempo en Sevilla</h1>

      <div className="bg-white border shadow rounded p-4 text-center mb-5">
        <h2 className="h5 mb-3">Clima Actual</h2>
        {climaActual ? (
          <>
            <p className="fs-4">
              {weatherEmojis[climaActual.codigo] || "❓"}{" "}
              {climaActual.temperatura} ºC
            </p>
            <p className="text-muted">Viento: {climaActual.viento} km/h</p>
          </>
        ) : (
          <p>Cargando clima actual...</p>
        )}
      </div>

      <h2 className="text-center mb-4">Pronóstico semanal</h2>
      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Día</th>
              <th>Tiempo</th>
              <th>Mín</th>
              <th>Máx</th>
              <th>Lluvia</th>
            </tr>
          </thead>
          <tbody>
            {pronostico.map((dia, idx) => (
              <tr key={idx}>
                <td>
                  {new Date(dia.fecha).toLocaleDateString("es-ES", {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                  })}
                </td>
                <td>{weatherEmojis[dia.codigo] || "❓"}</td>
                <td>{dia.min} ºC</td>
                <td>{dia.max} ºC</td>
                <td>{dia.lluvia} mm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-center text-muted small">
        Cuando se acerque la Semana Santa, esta sección mostrará el clima
        previsto para cada día litúrgico.
      </p>
    </div>
  );
};

export default Tiempo;
