import React from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";

// Estilo y centro por defecto (puedes ajustarlo)
const containerStyle = {
  width: "100%",
  height: "60vh",
};
const center = {
  lat: 37.389,
  lng: -5.994,
};

// Colores por tramo
const estilos = {
  ida: "#6a1b9a", // Morado
  carrera: "#fbc02d", // Dorado
  vuelta: "#2e7d32", // Verde
};

const MapaComponente = ({ recorrido }) => {
  if (!recorrido) return null;

  return (
    <div className="my-5">
      <h3 className="h5 fw-bold mb-3">Recorrido sobre el mapa</h3>
      <LoadScript googleMapsApiKey="AIzaSyDxvJlpFgpczM8e0YPiV7c_qJjKU51f32I">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          {/* Dibujo de líneas */}
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
