export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#3c1a3d" }}
      className="text-white pt-10 pb-6"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/img/ChatGPT Image 7 may 2025, 17_22_06.png"
              alt="Logo"
              className="w-12 h-12 mr-3 object-contain"
            />
            <h3 className="text-xl font-bold">Sevilla en Pasos</h3>
          </div>
          <p className="text-sm leading-relaxed">
            Plataforma web interactiva para descubrir y vivir la Semana Santa de
            Sevilla con toda la información centralizada y accesible desde
            cualquier dispositivo.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="/hermandades" className="hover:underline">
                Hermandades
              </a>
            </li>
            <li>
              <a href="/multimedia" className="hover:underline">
                Multimedia
              </a>
            </li>
            <li>
              <a href="/mapa" className="hover:underline">
                Mapa
              </a>
            </li>
            <li>
              <a href="/quiz" className="hover:underline">
                Jugar
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contacto</h4>
          <ul className="text-sm space-y-2">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              info@sevillaenpasos.es
            </li>
            <li>
              <span className="font-semibold">Teléfono:</span> +34 600 123 456
            </li>
            <li>
              <span className="font-semibold">Dirección:</span> Calle
              Imagineros, 7<br />
              41004 Sevilla
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Síguenos</h4>
          <div className="flex space-x-4 mt-2">
            {["facebook", "twitter", "instagram", "youtube"].map((icon) => (
              <a key={icon} href="#" className="hover:opacity-80 transition">
                <img
                  src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${icon}.svg`}
                  alt={icon}
                  className="w-6 h-6 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm">
        &copy; 2025 <strong>Sevilla en Pasos</strong>. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
