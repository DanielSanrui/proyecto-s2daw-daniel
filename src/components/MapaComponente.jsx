import React, { useEffect, useRef } from "react";
import { useJsApiLoader, GoogleMap, Polyline } from "@react-google-maps/api";
import "../css/Hermandad.css";

const containerStyle = {
  width: "100%",
  height: "450px",
  borderRadius: "12px",
  overflow: "hidden",
};

const estilos = {
  ida: "#6a1b9a",
  carrera: "#fbc02d",
  vuelta: "#2e7d32",
};

const leyenda = [
  { color: "#6a1b9a", label: "Ida" },
  { color: "#fbc02d", label: "Carrera oficial" },
  { color: "#2e7d32", label: "Vuelta" },
];

const MapaComponente = ({ recorrido }) => {
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (!mapRef.current || !recorrido) return;

    const bounds = new window.google.maps.LatLngBounds();
    ["ida", "carrera", "vuelta"].forEach((tipo) => {
      if (Array.isArray(recorrido[tipo])) {
        recorrido[tipo].forEach((p) => bounds.extend(p));
      }
    });
    mapRef.current.fitBounds(bounds);
  }, [recorrido]);

  if (!recorrido || !isLoaded) return null;

  return (
    <div className="mapa-componente mb-5">
      <h2 className="hermandad-section-titulo">Recorrido sobre el mapa</h2>

      <div className="mapa-componente__wrap">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: 37.389, lng: -5.994 }}
          zoom={14}
          onLoad={(map) => (mapRef.current = map)}
        >
          {["ida", "carrera", "vuelta"].map((tramo) =>
            recorrido[tramo] && recorrido[tramo].length > 1 ? (
              <Polyline
                key={tramo}
                path={recorrido[tramo]}
                options={{
                  strokeColor: estilos[tramo],
                  strokeOpacity: 0.9,
                  strokeWeight: 5,
                }}
              />
            ) : null
          )}
        </GoogleMap>
      </div>

      {/* Leyenda */}
      <div className="mapa-componente__leyenda">
        {leyenda.map((item) => (
          <div key={item.label} className="mapa-componente__leyenda-item">
            <span
              className="mapa-componente__leyenda-color"
              style={{ background: item.color }}
            />
            <span className="mapa-componente__leyenda-texto">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapaComponente;