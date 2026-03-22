import React, { useEffect, useState } from "react";
import "../css/Tiempo.css";

const Tiempo = () => {
  const [climaActual, setClimaActual] = useState(null);
  const [pronostico, setPronostico] = useState([]);
  const [error, setError] = useState(false);

  const weatherData = {
    0: { emoji: "☀️", desc: "Despejado" },
    1: { emoji: "🌤️", desc: "Soleado con algunas nubes" },
    2: { emoji: "🌥️", desc: "Parcialmente nublado" },
    3: { emoji: "☁️", desc: "Nublado" },
    45: { emoji: "🌫️", desc: "Niebla" },
    48: { emoji: "🌫️", desc: "Niebla con escarcha" },
    51: { emoji: "🌦️", desc: "Llovizna ligera" },
    53: { emoji: "🌦️", desc: "Llovizna moderada" },
    55: { emoji: "🌦️", desc: "Llovizna intensa" },
    61: { emoji: "🌧️", desc: "Lluvia ligera" },
    63: { emoji: "🌧️", desc: "Lluvia moderada" },
    65: { emoji: "🌧️", desc: "Lluvia fuerte" },
    80: { emoji: "🌧️", desc: "Lluvia intermitente ligera" },
    81: { emoji: "🌧️", desc: "Lluvia intermitente moderada" },
    82: { emoji: "🌧️", desc: "Lluvia intermitente fuerte" },
    95: { emoji: "⛈️", desc: "Tormenta" },
    96: { emoji: "⛈️", desc: "Tormenta con granizo leve" },
    99: { emoji: "⛈️", desc: "Tormenta con granizo fuerte" },
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
      })
      .catch(() => setError(true));
  }, []);

  const getWeather = (code) => weatherData[code] || { emoji: "❓", desc: "Desconocido" };

  return (
    <div>
      {/* ── CABECERA ── */}
      <section className="tiempo-header-banner">
        <div className="tiempo-header-banner__overlay" />
        <div className="tiempo-header-banner__contenido">
          <h1 className="tiempo-header-banner__titulo">El Tiempo en Sevilla</h1>
          <div className="tiempo-header-banner__linea" />
          <p className="tiempo-header-banner__subtitulo">
            Previsión meteorológica para la Semana Santa
          </p>
        </div>
      </section>

      <div className="container py-5">
        {/* ── CLIMA ACTUAL ── */}
        <div className="tiempo-actual mb-5">
          <div className="tiempo-actual-top">
            <span>Clima actual</span>
          </div>
          {error ? (
            <div className="tiempo-actual-body" style={{ justifyContent: "center" }}>
              <p className="mb-0 text-danger">No se pudo cargar el clima. Inténtalo de nuevo más tarde.</p>
            </div>
          ) : climaActual ? (
            <div className="tiempo-actual-body">
              <div className="tiempo-actual-col">
                <span className="tiempo-actual-emoji">{getWeather(climaActual.codigo).emoji}</span>
              </div>
              <div className="tiempo-actual-col">
                <div className="tiempo-actual-temp">{climaActual.temperatura}°C</div>
                <div className="tiempo-actual-desc">{getWeather(climaActual.codigo).desc}</div>
              </div>
              <div className="tiempo-actual-col">
                <div className="tiempo-actual-datos">
                  <div className="tiempo-actual-dato">
                    <i className="bi bi-wind"></i> {climaActual.viento} km/h
                  </div>
                  <div className="tiempo-actual-dato">
                    <i className="bi bi-geo-alt-fill"></i> Sevilla
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="tiempo-actual-body">
              <p className="mb-0">Cargando clima actual...</p>
            </div>
          )}
        </div>

        {/* ── PRONÓSTICO SEMANAL ── */}
        <h2 className="tiempo-seccion-titulo">Pronóstico semanal</h2>

        <div className="tiempo-table-wrapper mb-4">
          <table className="tiempo-table">
            <thead>
              <tr>
                <th>Día</th>
                <th>Tiempo</th>
                <th>Mín</th>
                <th>Máx</th>
                <th>Lluvia</th>
              </tr>
            </thead>
            <tbody>
              {pronostico.map((dia, idx) => {
                const weather = getWeather(dia.codigo);
                const fechaObj = new Date(dia.fecha);
                const diaSemana = fechaObj.toLocaleDateString("es-ES", { weekday: "long" });
                const fechaCorta = fechaObj.toLocaleDateString("es-ES", { day: "numeric", month: "short" });

                return (
                  <tr key={idx}>
                    <td className="td-dia">
                      {diaSemana}
                      <small>{fechaCorta}</small>
                    </td>
                    <td className="td-tiempo">
                      <span className="emoji">{weather.emoji}</span>
                      {weather.desc}
                    </td>
                    <td className="td-min">{dia.min}°C</td>
                    <td className="td-max">{dia.max}°C</td>
                    <td className="td-lluvia">{dia.lluvia} mm</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center tiempo-nota">
          Cuando se acerque la Semana Santa, esta sección mostrará el clima
          previsto para cada día litúrgico.
        </p>
      </div>
    </div>
  );
};

export default Tiempo;