// src/routes/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-[#3c1a3d] mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">Página no encontrada</p>
      <Link
        to="/"
        className="bg-[#3c1a3d] text-white px-6 py-2 rounded hover:bg-[#4d2350] transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
