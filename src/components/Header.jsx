import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

function Header() {
  useEffect(() => {
    //Cerrar menú cuando hago clic en un enlace
    const mobileMenu = document.getElementById("mobileMenu");

    const enlaces = mobileMenu?.querySelectorAll("a");
    enlaces?.forEach((enlace) => {
      enlace.addEventListener("click", () => {
        const bsCollapse = window.bootstrap.Collapse.getInstance(mobileMenu);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      });
    });
  }, []);

  const navLinkStyle = {
    position: "relative",
    transition: "color 0.3s ease",
    letterSpacing: "0.5px",
  };

  return (
    <header
      className="sticky-top"
      style={{ backgroundColor: "#3c1a3d", zIndex: 1050, borderBottom: "2px solid #c9a84c" }}
    >
      <style>{`
        .nav-link-header:hover { color: #c9a84c !important; }
        .nav-link-header::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #c9a84c;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link-header:hover::after { width: 100%; }
        .dropdown-menu-custom .dropdown-item:hover {
          background-color: #3c1a3d !important;
          color: white !important;
          padding-left: 1.5rem;
        }
        .dropdown-menu-custom .dropdown-item {
          transition: all 0.2s ease;
          border-bottom: 1px solid rgba(60, 26, 61, 0.08);
          color: #3c1a3d;
        }
        .dropdown-menu-custom .dropdown-item:last-child {
          border-bottom: none;
        }
        .mobile-link:hover { color: #c9a84c !important; padding-left: 0.5rem; }
        .mobile-link { transition: all 0.3s ease; }
        .hamburger-btn:hover { color: #c9a84c !important; }
      `}</style>

      <div className="container-fluid d-flex justify-content-between align-items-center py-3 px-4">
        <div className="d-flex align-items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Logo Sevilla en Pasos"
              style={{ height: "60px", width: "60px", objectFit: "contain" }}
            />
          </Link>
          <h1 className="text-white h4 m-0">
            Sevilla en Pasos
          </h1>
        </div>

        <nav className="d-none d-md-flex gap-4 align-items-center">
          <Link
            to="/hermandades"
            className="text-white text-decoration-none nav-link-header"
            style={navLinkStyle}
          >
            Hermandades
          </Link>
          <div className="dropdown">
            <Link
              to="/dias"
              className="text-white text-decoration-none nav-link-header me-1"
              style={navLinkStyle}
            >
              Días
            </Link>

            <span
              className="text-white dropdown-toggle"
              role="button"
              id="dropdownDias"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer", opacity: 0.8 }}
            ></span>

            <ul
              className="dropdown-menu dropdown-menu-custom border-0 shadow-lg text-start py-2"
              aria-labelledby="dropdownDias"
              style={{ backgroundColor: "#faf3e6", borderRadius: "10px", overflow: "hidden", minWidth: "220px" }}
            >
              <li>
                <Link className="dropdown-item py-2 px-3" to="/dias/viernes-de-dolores">
                  Viernes de Dolores
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-2 px-3" to="/dias/sabado-de-pasion">
                  Sábado de Pasión
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-2 px-3" to="/dias/domingo-de-ramos">
                  Domingo de Ramos
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-2 px-3" to="/dias/lunes-santo">
                  Lunes Santo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-2 px-3" to="/dias/martes-santo">
                  Martes Santo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-2 px-3" to="/dias/miercoles-santo">
                  Miércoles Santo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-2 px-3" to="/dias/jueves-santo">
                  Jueves Santo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-2 px-3" to="/dias/la-madruga">
                  La Madrugá
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-2 px-3" to="/dias/viernes-santo">
                  Viernes Santo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-2 px-3" to="/dias/sabado-santo">
                  Sábado Santo
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item py-2 px-3"
                  to="/dias/domingo-de-resurreccion"
                >
                  Domingo de Resurrección
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/noticias"
            className="text-white text-decoration-none nav-link-header"
            style={navLinkStyle}
          >
            Noticias
          </Link>
          <Link
            to="/multimedia"
            className="text-white text-decoration-none nav-link-header"
            style={navLinkStyle}
          >
            Multimedia
          </Link>
          <Link
            to="/mapa"
            className="text-white text-decoration-none nav-link-header"
            style={navLinkStyle}
          >
            Mapa
          </Link>

          <Link
            to="/tiempo"
            className="text-white text-decoration-none nav-link-header"
            style={navLinkStyle}
          >
            Tiempo
          </Link>
          <Link
            to="/juego"
            className="text-white text-decoration-none nav-link-header"
            style={navLinkStyle}
          >
            Jugar
          </Link>
        </nav>
        <div className="d-md-none">
          <button
            className="btn btn-outline-light border-0 hamburger-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list" style={{ fontSize: "1.8rem" }}></i>
          </button>
        </div>
      </div>

      <div
        className="collapse d-md-none px-4 pb-3"
        id="mobileMenu"
        style={{ backgroundColor: "#3c1a3d", borderTop: "1px solid rgba(201, 168, 76, 0.3)" }}
      >
        <Link
          to="/hermandades"
          className="d-block py-2 text-white text-decoration-none fw-semibold mobile-link"
        >
          Hermandades
        </Link>

        <Link
          to="/dias"
          className="d-block py-2 fw-semibold text-white text-decoration-none mobile-link"
        >
          Días
        </Link>
        <div className="ps-3" style={{ borderLeft: "2px solid rgba(201, 168, 76, 0.4)" }}>
          <Link
            to="/dias/viernes-de-dolores"
            className="d-block py-1 text-white text-decoration-none mobile-link"
            style={{ opacity: 0.85 }}
          >
            Viernes de Dolores
          </Link>
          <Link
            to="/dias/sabado-de-pasion"
            className="d-block py-1 text-white text-decoration-none mobile-link"
            style={{ opacity: 0.85 }}
          >
            Sábado de Pasión
          </Link>
          <Link
            to="/dias/domingo-de-ramos"
            className="d-block py-1 text-white text-decoration-none mobile-link"
            style={{ opacity: 0.85 }}
          >
            Domingo de Ramos
          </Link>
          <Link
            to="/dias/lunes-santo"
            className="d-block py-1 text-white text-decoration-none mobile-link"
            style={{ opacity: 0.85 }}
          >
            Lunes Santo
          </Link>
          <Link
            to="/dias/martes-santo"
            className="d-block py-1 text-white text-decoration-none mobile-link"
            style={{ opacity: 0.85 }}
          >
            Martes Santo
          </Link>
          <Link
            to="/dias/miercoles-santo"
            className="d-block py-1 text-white text-decoration-none mobile-link"
            style={{ opacity: 0.85 }}
          >
            Miércoles Santo
          </Link>
          <Link
            to="/dias/jueves-santo"
            className="d-block py-1 text-white text-decoration-none mobile-link"
            style={{ opacity: 0.85 }}
          >
            Jueves Santo
          </Link>
          <Link
            to="/dias/la-madruga"
            className="d-block py-1 text-white text-decoration-none mobile-link"
            style={{ opacity: 0.85 }}
          >
            La Madrugá
          </Link>
          <Link
            to="/dias/viernes-santo"
            className="d-block py-1 text-white text-decoration-none mobile-link"
            style={{ opacity: 0.85 }}
          >
            Viernes Santo
          </Link>
          <Link
            to="/dias/sabado-santo"
            className="d-block py-1 text-white text-decoration-none mobile-link"
            style={{ opacity: 0.85 }}
          >
            Sábado Santo
          </Link>
          <Link
            to="/dias/domingo-de-resurreccion"
            className="d-block py-1 text-white text-decoration-none mobile-link"
            style={{ opacity: 0.85 }}
          >
            Domingo de Resurrección
          </Link>
        </div>

        <Link
          to="/multimedia"
          className="d-block py-2 fw-semibold text-white text-decoration-none mobile-link"
        >
          Multimedia
        </Link>
        <Link
          to="/mapa"
          className="d-block py-2 fw-semibold text-white text-decoration-none mobile-link"
        >
          Mapa
        </Link>
        <Link
          to="/tiempo"
          className="d-block py-2 fw-semibold text-white text-decoration-none mobile-link"
        >
          Tiempo
        </Link>
        <Link
          to="/noticias"
          className="d-block py-2 fw-semibold text-white text-decoration-none mobile-link"
        >
          Noticias
        </Link>
        <Link
          to="/juego"
          className="d-block py-2 fw-semibold text-white text-decoration-none mobile-link"
        >
          Jugar
        </Link>
      </div>
    </header>
  );
}

export default Header;
