import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify.js";

const CardDia = ({ nombre, descripcion, imagen, ruta }) => {
  const diaSlug = ruta ?? slugify(nombre);
  return (
    <div className="card mb-4 shadow border">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={imagen}
            alt={nombre}
            className="img-fluid h-100 object-fit-cover rounded-start"
          />
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-between p-4">
          <div>
            <h2 className="h4 fw-bold mb-2">{nombre}</h2>
            <p className="text-muted mb-3">{descripcion}</p>
          </div>
          <Link
            to={`/dias/${diaSlug}`}
            className="btn"
            style={{
              backgroundColor: "#3c1a3d",
              color: "white",
              border: "2px solid #3c1a3d",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#3c1a3d";
              e.target.style.border = "2px solid #3c1a3d";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#3c1a3d";
              e.target.style.color = "white";
              e.target.style.border = "2px solid #3c1a3d";
            }}
          >
            Ver Hermandades
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDia;
