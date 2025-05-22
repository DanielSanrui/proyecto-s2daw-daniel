import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

function Header() {
  useEffect(() => {
    const toggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (toggle && mobileMenu) {
      toggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("d-none");
      });
    }
  }, []);

  return (
    <header
      className="sticky-top shadow"
      style={{ backgroundColor: "#3c1a3d", zIndex: 1050 }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center py-3 px-4">
        {/* Logo + Título */}
        <div className="d-flex align-items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Logo Sevilla en Pasos"
              style={{ height: "60px", width: "60px", objectFit: "contain" }}
            />
          </Link>
          <h1 className="text-white h4 m-0">Sevilla en Pasos</h1>
        </div>

        {/* Menú Desktop */}
        <nav className="d-none d-md-flex gap-4">
          <Link
            to="/"
            className="text-white text-decoration-none hover-underline"
          >
            Inicio
          </Link>
          <Link
            to="/hermandades"
            className="text-white text-decoration-none hover-underline"
          >
            Hermandades
          </Link>

          {/* Dropdown Días */}
          <div className="dropdown">
            <span
              className="text-white dropdown-toggle hover-underline"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Días
            </span>
            <ul
              className="dropdown-menu text-start"
              style={{ backgroundColor: "antiquewhite" }}
            >
              <li>
                <Link className="dropdown-item" to="/dias/domingo-de-ramos">
                  Domingo de Ramos
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dias/lunes-santo">
                  Lunes Santo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dias/martes-santo">
                  Martes Santo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dias/miercoles-santo">
                  Miércoles Santo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dias/jueves-santo">
                  Jueves Santo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dias/la-madruga">
                  La Madrugá
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dias/viernes-santo">
                  Viernes Santo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dias/sabado-santo">
                  Sábado Santo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dias/domingo-resurreccion">
                  Domingo de Resurrección
                </Link>
              </li>
            </ul>
          </div>

          <Link
            to="/multimedia"
            className="text-white text-decoration-none hover-underline"
          >
            Multimedia
          </Link>
          <Link
            to="/mapa"
            className="text-white text-decoration-none hover-underline"
          >
            Mapa
          </Link>
          <Link
            to="/juego"
            className="text-white text-decoration-none hover-underline"
          >
            Jugar
          </Link>
        </nav>

        {/* Botón hamburguesa móvil */}
        <div className="d-md-none">
          <button id="menu-toggle" className="btn btn-outline-light border-0">
            <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div id="mobile-menu" className="d-none d-md-none bg-white px-4 pb-3">
        <Link to="/" className="d-block py-2 text-dark border-bottom">
          Inicio
        </Link>
        <Link
          to="/hermandades"
          className="d-block py-2 text-dark border-bottom"
        >
          Hermandades
        </Link>

        <div className="py-2 border-bottom">
          <strong>Días</strong>
          <div className="ps-3">
            <Link
              to="/dias/domingo-de-ramos"
              className="d-block py-1 text-dark"
            >
              Domingo de Ramos
            </Link>
            <Link to="/dias/lunes-santo" className="d-block py-1 text-dark">
              Lunes Santo
            </Link>
            <Link to="/dias/martes-santo" className="d-block py-1 text-dark">
              Martes Santo
            </Link>
            <Link to="/dias/miercoles-santo" className="d-block py-1 text-dark">
              Miércoles Santo
            </Link>
            <Link to="/dias/jueves-santo" className="d-block py-1 text-dark">
              Jueves Santo
            </Link>
            <Link to="/dias/la-madruga" className="d-block py-1 text-dark">
              La Madrugá
            </Link>
            <Link to="/dias/viernes-santo" className="d-block py-1 text-dark">
              Viernes Santo
            </Link>
            <Link to="/dias/sabado-santo" className="d-block py-1 text-dark">
              Sábado Santo
            </Link>
            <Link
              to="/dias/domingo-resurreccion"
              className="d-block py-1 text-dark"
            >
              Domingo de Resurrección
            </Link>
          </div>
        </div>

        <Link to="/multimedia" className="d-block py-2 text-dark border-bottom">
          Multimedia
        </Link>
        <Link to="/mapa" className="d-block py-2 text-dark border-bottom">
          Mapa
        </Link>
        <Link to="/juego" className="d-block py-2 text-dark">
          Jugar
        </Link>
      </div>
    </header>
  );
}

export default Header;
