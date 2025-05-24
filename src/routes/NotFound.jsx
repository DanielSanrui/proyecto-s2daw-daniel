import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1 fw-bold text-dark mb-4">404</h1>
      <p className="fs-4 text-secondary mb-4">Página no encontrada</p>
      <Link
        to="/"
        className="btn px-4 py-2"
        style={{ backgroundColor: "#3c1a3d", color: "#fff" }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
