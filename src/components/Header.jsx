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

        <nav className="d-none d-md-flex gap-4">
          <Link
            to="/hermandades"
            className="text-white text-decoration-none hover-underline"
          >
            Hermandades
          </Link>
          <div className="dropdown">
            <Link
              to="/dias"
              className="text-white text-decoration-none hover-underline me-2"
            >
              Días
            </Link>

            <span
              className="text-white dropdown-toggle"
              role="button"
              id="dropdownDias"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            ></span>

            <ul
              className="dropdown-menu text-start"
              aria-labelledby="dropdownDias"
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
                <Link className="dropdown-item" to="/dias/madruga">
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
            to="/noticias"
            className="text-white text-decoration-none hover-underline"
          >
            Noticias
          </Link>
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
            to="/tiempo"
            className="text-white text-decoration-none hover-underline"
          >
            Tiempo
          </Link>
          <Link
            to="/juego"
            className="text-white text-decoration-none hover-underline"
          >
            Jugar
          </Link>
        </nav>
        <div className="d-md-none">
          <button
            className="btn btn-outline-light border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
          </button>
        </div>
      </div>

      <div
        className="collapse d-md-none px-4 pb-3"
        id="mobileMenu"
        style={{ backgroundColor: "#3c1a3d" }}
      >
        <Link
          to="/hermandades"
          className="d-block py-2 text-white text-decoration-none fw-semibold"
        >
          Hermandades
        </Link>

        <Link
          to="/dias"
          className="d-block py-2 fw-semibold text-white text-decoration-none"
        >
          Días
        </Link>
        <div className="ps-3">
          <Link
            to="/dias/domingo-de-ramos"
            className="d-block py-1 text-white text-decoration-none"
          >
            Domingo de Ramos
          </Link>
          <Link
            to="/dias/lunes-santo"
            className="d-block py-1 text-white text-decoration-none"
          >
            Lunes Santo
          </Link>
          <Link
            to="/dias/martes-santo"
            className="d-block py-1 text-white text-decoration-none"
          >
            Martes Santo
          </Link>
          <Link
            to="/dias/miercoles-santo"
            className="d-block py-1 text-white text-decoration-none"
          >
            Miércoles Santo
          </Link>
          <Link
            to="/dias/jueves-santo"
            className="d-block py-1 text-white text-decoration-none"
          >
            Jueves Santo
          </Link>
          <Link
            to="/dias/madruga"
            className="d-block py-1 text-white text-decoration-none"
          >
            La Madrugá
          </Link>
          <Link
            to="/dias/viernes-santo"
            className="d-block py-1 text-white text-decoration-none"
          >
            Viernes Santo
          </Link>
          <Link
            to="/dias/sabado-santo"
            className="d-block py-1 text-white text-decoration-none"
          >
            Sábado Santo
          </Link>
          <Link
            to="/dias/domingo-resurreccion"
            className="d-block py-1 text-white text-decoration-none"
          >
            Domingo de Resurrección
          </Link>
        </div>

        <Link
          to="/multimedia"
          className="d-block py-2 fw-semibold text-white text-decoration-none"
        >
          Multimedia
        </Link>
        <Link
          to="/mapa"
          className="d-block py-2 fw-semibold text-white text-decoration-none"
        >
          Mapa
        </Link>
        <Link
          to="/tiempo"
          className="d-block py-2 fw-semibold text-white text-decoration-none"
        >
          Tiempo
        </Link>
        <Link
          to="/noticias"
          className="d-block py-2 fw-semibold text-white text-decoration-none"
        >
          Noticias
        </Link>
        <Link
          to="/juego"
          className="d-block py-2 fw-semibold text-white text-decoration-none"
        >
          Jugar
        </Link>
      </div>
    </header>
  );
}

export default Header;
