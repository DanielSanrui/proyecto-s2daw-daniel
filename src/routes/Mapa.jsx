import { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import templos from "../data/Templos.json";

const center = { lat: 37.389, lng: -5.994 };
const userPosition = { lat: 37.3841, lng: -6.0008 };

const containerStyle = {
  width: "100%",
  height: "75vh",
};

function Mapa() {
  const [selected, setSelected] = useState(null);
  const [cercanos, setCercanos] = useState([]);

  useEffect(() => {
    const rad = (x) => (x * Math.PI) / 180;
    const distance = (p1, p2) => {
      const R = 6371e3; // Earth radius in meters
      const dLat = rad(p2.lat - p1.lat);
      const dLng = rad(p2.lng - p1.lng);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) *
          Math.cos(rad(p2.lat)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    const filtrados = templos.filter(
      (t) => distance(userPosition, { lat: t.lat, lng: t.lng }) <= 1000
    );
    setCercanos(filtrados);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-[#3c1a3d] mb-6">
        Mapa de Hermandades
      </h1>
      <p className="text-center text-gray-700 mb-6">
        Consulta los templos más importantes y descubre si estás cerca
      </p>

      <LoadScript
        googleMapsApiKey="AIzaSyDxvJlpFgpczM8e0YPiV7c_qJjKU51f32I"
        libraries={["geometry"]}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          {/* Marcadores */}
          {templos.map((templo, index) => (
            <Marker
              key={index}
              position={{ lat: templo.lat, lng: templo.lng }}
              onClick={() => setSelected(templo)}
              title={templo.nombre}
            />
          ))}

          {/* Usuario simulado */}
          <Marker
            position={userPosition}
            icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            title="Tu ubicación"
          />

          {/* InfoWindow */}
          {selected && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
            >
              <div className="max-w-xs">
                <h2 className="text-lg font-bold">{selected.nombre}</h2>
                <p className="text-sm">{selected.descripcion}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      {/* Cards de templos cercanos */}
      {cercanos.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4 text-[#3c1a3d]">
            Sitios cercanos:
          </h2>
          <div className="space-y-4">
            {cercanos.map((t, i) => (
              <div
                key={i}
                className="w-full bg-white rounded-xl shadow-md border border-gray-300 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition duration-300"
              >
                <img
                  src={t.imagen}
                  alt={t.nombre}
                  className="w-full md:w-60 h-48 object-cover md:rounded-l-xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#3c1a3d] mb-2">
                    {t.nombre}
                  </h3>
                  <p className="text-gray-700 text-base">{t.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Mapa;
