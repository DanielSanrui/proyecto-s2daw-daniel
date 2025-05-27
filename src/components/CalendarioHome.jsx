import React from "react";
import { useNavigate } from "react-router-dom";

const dias = [
  {
    nombre: "Domingo de Ramos",
    fecha: "29 de marzo",
    ruta: "domingo-de-ramos",
    imagen:
      "https://sevilla.abc.es/pasionensevilla/wp-content/uploads/sites/2/eventos/2023/03/amor-burra-bandera.jpg",
  },
  {
    nombre: "Lunes Santo",
    fecha: "30 de marzo",
    ruta: "lunes-santo",
    imagen:
      "https://files-101tv-londres.s3-accelerate.amazonaws.com/2022/11/Fhj6DrlX0AI3sTQ-1920x1253.jpg",
  },
  {
    nombre: "Martes Santo",
    fecha: "31 de marzo",
    ruta: "martes-santo",
    imagen:
      "https://www.diariodesevilla.es/contenidos/programa-semana-santa-sevilla/img/img_ficha/san-benito.jpg",
  },
  {
    nombre: "Miércoles Santo",
    fecha: "1 de abril",
    ruta: "miercoles-santo",
    imagen:
      "https://101tvsevilla.es/wp-content/uploads/2023/10/52110526836_be16626e5a_o-1-1920x1231.jpg",
  },
  {
    nombre: "Jueves Santo",
    fecha: "2 de abril",
    ruta: "jueves-santo",
    imagen:
      "https://www.hermandaddepasion.org/wp-content/uploads/2017/12/25488368_549574362066907_3223547178602661859_o.jpg",
  },
  {
    nombre: "La Madrugá",
    fecha: "3 de abril",
    ruta: "madruga",
    imagen: "https://live.staticflickr.com/4173/33858384954_753d7b93c4_b.jpg",
  },
  {
    nombre: "Viernes Santo",
    fecha: "3 de abril",
    ruta: "viernes-santo",
    imagen:
      "https://www.gentedepaz.es/wp-content/uploads/2023/05/20230520_100719.jpg",
  },
  {
    nombre: "Sábado Santo",
    fecha: "4 de abril",
    ruta: "sabado-santo",
    imagen:
      "https://d17umfmk0e27oh.cloudfront.net/articulos/articulos-1121598.jpg",
  },
  {
    nombre: "Domingo de Resurrección",
    fecha: "5 de abril",
    ruta: "domingo-resurreccion",
    imagen:
      "https://www.sevillaactualidad.com/wp-content/uploads/2023/04/resucitado-13.jpg",
  },
];

const CalendarioHome = () => {
  const navigate = useNavigate();

  return (
    <section className="py-5 text-white" style={{ backgroundColor: "#3c1a3d" }}>
      <h2 className="text-center mb-4 fw-bold fs-2">
        Calendario Semana Santa 2026
      </h2>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {dias.map((dia, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              onClick={() => navigate(`/dia/${dia.ruta}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="card h-100 p-2 shadow-sm border-0 text-center transition hover:scale-105">
                <img
                  src={dia.imagen}
                  alt={dia.nombre}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "160px" }}
                />
                <div className="card-body" style={{ color: "#3c1a3d" }}>
                  <h5 className="card-title fw-bold">{dia.nombre}</h5>
                  <p className="card-text">{dia.fecha}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalendarioHome;
