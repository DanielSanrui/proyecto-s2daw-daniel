import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css";

function NotFound() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "75vh" }}>

      <div className="nf-hero">
        <div className="nf-badge">Error</div>
        <div className="nf-number">404</div>
        <div className="nf-hero-text">Página no encontrada</div>
      </div>

      <div className="nf-content">
        <h2>Parece que te has perdido entre las calles de Sevilla</h2>
        <p>
          No hemos encontrado la página que buscas. Puede que la dirección
          haya cambiado o que nunca haya existido. Elige una de las opciones
          de abajo para seguir explorando.
        </p>

        <div className="nf-actions">
          <Link to="/" className="nf-btn-home">
            <i className="bi bi-house-door me-2"></i>Inicio
          </Link>
          <Link to="/mapa" className="nf-btn-map">
            <i className="bi bi-map me-2"></i>Ver mapa
          </Link>
        </div>

        <hr className="nf-divider" />

        <div className="nf-explore">
          <Link to="/hermandades">
            <i className="bi bi-people"></i> Hermandades
          </Link>
          <Link to="/dias">
            <i className="bi bi-calendar-week"></i> Días
          </Link>
          <Link to="/noticias">
            <i className="bi bi-newspaper"></i> Noticias
          </Link>
          <Link to="/multimedia">
            <i className="bi bi-collection-play"></i> Multimedia
          </Link>
          <Link to="/tiempo">
            <i className="bi bi-cloud-sun"></i> Tiempo
          </Link>
          <Link to="/juego">
            <i className="bi bi-controller"></i> Jugar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
