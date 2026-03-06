import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";

// Estilo del contenedor del mapa
const containerStyle = {
  width: "400px", // ⬅️ mismo valor que height
  height: "400px",
  border: "3px solid #6a1b9a",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(106, 27, 154, 0.3)",
  margin: "0 auto", // centra el cuadrado horizontalmente
};

// Colores de cada tramo
const estilos = {
  ida: "#6a1b9a", // Morado
  carrera: "#fbc02d", // Dorado
  vuelta: "#2e7d32", // Verde
};

const MapaComponente = ({ recorrido }) => {
  const mapRef = useRef(null);

  // Centrado automático del mapa según puntos
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

  if (!recorrido) return null;

  return (
    <div className="my-5">
      <h3 className="h5 fw-bold mb-3" style={{ color: "#3c1a3d" }}>
        Recorrido sobre el mapa
      </h3>
      <LoadScript googleMapsApiKey="AIzaSyDxvJlpFgpczM8e0YPiV7c_qJjKU51f32I">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: 37.389, lng: -5.994 }}
          zoom={14}
          onLoad={(map) => (mapRef.current = map)}
        >
          {/* Dibujar líneas para ida, carrera oficial y vuelta */}
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
      </LoadScript>
    </div>
  );
};

export default MapaComponente;
