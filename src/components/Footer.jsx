import logo from "../img/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-4"
      style={{ backgroundColor: "#3c1a3d" }}
    >
      <div className="container">
        <div className="row">
          {/* Logo + Descripción */}
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="Logo" width="60" className="me-2" />
              <h5 className="fw-bold">Sevilla en Pasos</h5>
            </div>
            <p className="small">
              Plataforma web interactiva para descubrir y vivir la Semana Santa
              de Sevilla con toda la información centralizada.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Navegación</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/hermandades"
                  className="text-white text-decoration-none"
                >
                  Hermandades
                </a>
              </li>
              <li>
                <a href="/dias" className="text-white text-decoration-none">
                  Días
                </a>
              </li>
              <li>
                <a href="/noticias" className="text-white text-decoration-none">
                  Noticias
                </a>
              </li>
              <li>
                <a
                  href="/multimedia"
                  className="text-white text-decoration-none"
                >
                  Multimedia
                </a>
              </li>
              <li>
                <a href="/mapa" className="text-white text-decoration-none">
                  Mapa
                </a>
              </li>
              <li>
                <a href="/tiempo" className="text-white text-decoration-none">
                  Tiempo
                </a>
              </li>
              <li>
                <a href="/juego" className="text-white text-decoration-none">
                  Jugar
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contacto</h6>
            <p className="small mb-1">
              <strong>Email:</strong> info@sevillaenpasos.es
            </p>
            <p className="small mb-1">
              <strong>Teléfono:</strong> +34 600 123 456
            </p>
            <p className="small">
              <strong>Dirección:</strong> Calle Imagineros, 7<br />
              41004 Sevilla
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Síguenos</h6>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-white">
                <i className="bi bi-instagram fs-5 " fill="white"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter-x fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-youtube fs-5 white"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center small">
          &copy; 2025 <strong>Sevilla en Pasos</strong>. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
