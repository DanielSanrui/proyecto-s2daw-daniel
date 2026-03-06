import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-4"
      style={{ backgroundColor: "#3c1a3d", borderTop: "3px solid #c9a84c" }}
    >
      <style>{`
        .footer-link {
          transition: all 0.3s ease;
          opacity: 0.85;
        }
        .footer-link:hover {
          opacity: 1;
          color: #c9a84c !important;
          padding-left: 4px;
        }
        .footer-social-icon {
          transition: all 0.3s ease;
          opacity: 0.85;
        }
        .footer-social-icon:hover {
          opacity: 1;
          color: #c9a84c !important;
          transform: translateY(-3px);
        }
        .footer-heading {
          position: relative;
          display: inline-block;
          padding-bottom: 6px;
        }
        .footer-heading::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: #c9a84c;
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="Logo" width="60" className="me-2" />
              <h5 className="fw-bold m-0">Sevilla en Pasos</h5>
            </div>
            <p className="small" style={{ opacity: 0.85, lineHeight: "1.7" }}>
              Plataforma web interactiva para descubrir y vivir la Semana Santa
              de Sevilla con toda la información centralizada.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold footer-heading mb-3">Navegación</h6>
            <ul className="list-unstyled small">
              <li className="mb-1">
                <Link to="/" className="text-white text-decoration-none footer-link">
                  Inicio
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/hermandades" className="text-white text-decoration-none footer-link">
                  Hermandades
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/dias" className="text-white text-decoration-none footer-link">
                  Días
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/noticias" className="text-white text-decoration-none footer-link">
                  Noticias
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/multimedia" className="text-white text-decoration-none footer-link">
                  Multimedia
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/mapa" className="text-white text-decoration-none footer-link">
                  Mapa
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/tiempo" className="text-white text-decoration-none footer-link">
                  Tiempo
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/juego" className="text-white text-decoration-none footer-link">
                  Jugar
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold footer-heading mb-3">Contacto</h6>
            <div className="small">
              <div className="d-flex align-items-center mb-2" style={{ opacity: 0.85 }}>
                <i className="bi bi-envelope-fill me-2" style={{ color: "#c9a84c" }}></i>
                <a href="mailto:sevillaenpasos@gmail.com" className="text-white text-decoration-none footer-link">
                  sevillaenpasos@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-center" style={{ opacity: 0.85 }}>
                <i className="bi bi-geo-alt-fill me-2" style={{ color: "#c9a84c" }}></i>
                <span>Sevilla, España</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold footer-heading mb-3">Síguenos</h6>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-white footer-social-icon">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white footer-social-icon">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white footer-social-icon">
                <i className="bi bi-youtube fs-5"></i>
              </a>
              <a
                href="https://www.tiktok.com/@sevillaenpasos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white footer-social-icon"
              >
                <i className="bi bi-tiktok fs-5"></i>
              </a>
              <a href="#" className="text-white footer-social-icon">
                <i className="bi bi-twitter fs-5"></i>
              </a>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(201, 168, 76, 0.3)" }} />
        <div className="text-center small" style={{ opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} <strong>Sevilla en Pasos</strong>. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
