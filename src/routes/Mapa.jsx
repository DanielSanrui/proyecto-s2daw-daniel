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
      const R = 6371e3;
      const dLat = rad(p2.lat - p1.lat);
      const dLng = rad(p2.lng - p1.lng);
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) * Math.sin(dLng / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    const filtrados = templos.filter(
      (t) => distance(userPosition, { lat: t.lat, lng: t.lng }) <= 1000
    );
    setCercanos(filtrados);
  }, []);

  return (
    <div className="container py-5">
      <h1
        className="text-center fw-bold display-5 mb-4"
        style={{ color: "#3c1a3d" }}
      >
        Mapa de Hermandades
      </h1>
      <p className="text-center text-muted mb-4">
        Consulta los templos más importantes y descubre si estás cerca
      </p>

      <LoadScript
        googleMapsApiKey="AIzaSyDxvJlpFgpczM8e0YPiV7c_qJjKU51f32I"
        libraries={["geometry"]}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          {templos.map((templo, index) => (
            <Marker
              key={index}
              position={{ lat: templo.lat, lng: templo.lng }}
              onClick={() => setSelected(templo)}
              title={templo.nombre}
            />
          ))}
          <Marker
            position={userPosition}
            icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            title="Tu ubicación"
          />
          {selected && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
            >
              <div style={{ maxWidth: "200px" }}>
                <h5 className="fw-bold mb-1">{selected.nombre}</h5>
                <p className="small mb-0">{selected.descripcion}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      {cercanos.length > 0 && (
        <section className="mt-5">
          <h2 className="h4 fw-bold text-dark mb-4">Sitios cercanos:</h2>
          <div className="row g-4">
            {cercanos.map((t, i) => (
              <div className="col-12" key={i}>
                <div className="card border shadow-sm h-100 flex-row">
                  <img
                    src={t.imagen}
                    alt={t.nombre}
                    className="img-fluid object-fit-cover"
                    style={{
                      width: "250px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title y fw-bold"
                      style={{ color: "#3c1a3d" }}
                    >
                      {t.nombre}
                    </h5>
                    <p className="card-text">{t.descripcion}</p>
                  </div>
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
