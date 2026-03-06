import { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import templos from "../data/Templos.json";

const containerStyle = {
  width: "100%",
  height: "75vh",
};

function Mapa() {
  const [userPosition, setUserPosition] = useState(null);
  const [selected, setSelected] = useState(null);
  const [cercanos, setCercanos] = useState([]);
  const [map, setMap] = useState(null);
  const [hasCentered, setHasCentered] = useState(false);

  // 📏 Calcular distancia entre dos puntos (Haversine)
  const rad = (x) => (x * Math.PI) / 180;
  const distance = (p1, p2) => {
    const R = 6371e3;
    const dLat = rad(p2.lat - p1.lat);
    const dLng = rad(p2.lng - p1.lng);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(rad(p1.lat)) *
      Math.cos(rad(p2.lat)) *
      Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Seguir ubicación en tiempo real
  useEffect(() => {
    if (!navigator.geolocation) return;

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setUserPosition(coords);

        // Recalcular templos cercanos (1 km)
        const cercanosFiltrados = templos.filter((t) =>
          distance(coords, { lat: t.lat, lng: t.lng }) <= 1000
        );
        setCercanos(cercanosFiltrados);
      },
      (error) => {
        console.error("Error al obtener la ubicación", error);

        // Ubicación fallback (Sevilla centro)
        const fallback = { lat: 37.3841, lng: -6.0008 };
        setUserPosition(fallback);

        const cercanosFiltrados = templos.filter((t) =>
          distance(fallback, { lat: t.lat, lng: t.lng }) <= 1000
        );
        setCercanos(cercanosFiltrados);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 15000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const initialCenterRef = useRef(null);

  // Centrar el mapa solo la primera vez que se obtiene ubicación
  useEffect(() => {
    if (map && userPosition && !hasCentered) {
      initialCenterRef.current = userPosition;
      map.panTo(userPosition);
      map.setZoom(16);
      setHasCentered(true);
    }
  }, [userPosition, map, hasCentered]);

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
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        libraries={["geometry"]}
      >
        {userPosition && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={initialCenterRef.current || { lat: 37.3841, lng: -6.0008 }}
            zoom={15}
            onLoad={(mapInstance) => setMap(mapInstance)}
          >
            {/* Marcadores templos */}
            {templos.map((templo, index) => (
              <Marker
                key={index}
                position={{ lat: templo.lat, lng: templo.lng }}
                onClick={() => setSelected(templo)}
                title={templo.nombre}
                icon={{
                  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z",
                  fillColor: "#3c1a3d",
                  fillOpacity: 1,
                  strokeColor: "#c9a84c",
                  strokeWeight: 1.5,
                  scale: 1.5,
                  anchor: window.google?.maps ? new window.google.maps.Point(12, 22) : undefined,
                }}
              />
            ))}

            {/* Marcador usuario */}
            <Marker
              position={userPosition}
              icon={{
                path: window.google?.maps?.SymbolPath?.CIRCLE,
                scale: 10,
                fillColor: "#3c1a3d",
                fillOpacity: 1,
                strokeColor: "#c9a84c",
                strokeWeight: 3,
              }}
              title="Tu ubicación"
            />

            {/* ℹ️ InfoWindow */}
            {selected && (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => setSelected(null)}
              >
                <div style={{ maxWidth: "200px" }}>
                  <h5 className="fw-bold mb-1">{selected.nombre}</h5>
                  <img src={selected.imagen} alt={selected.nombre} style={{ width: "100%", height: "auto" }} />
                  <p className="small mb-0">{selected.descripcion}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </LoadScript>

      {/* Templos cercanos */}
      {cercanos.length > 0 && (
        <section className="mt-5">
          <h2 className="h4 fw-bold text-dark mb-4">Sitios cercanos:</h2>
          <div className="row g-4">
            {cercanos.map((t, i) => (
              <div className="col-12" key={i}>
                <div className="card border shadow-sm h-100 d-flex flex-column flex-md-row align-items-center align-items-md-stretch">
                  <img
                    src={t.imagen}
                    alt={t.nombre}
                    className="img-fluid d-block mx-auto my-2"
                    style={{
                      height: "160px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title fw-bold mb-2"
                      style={{ color: "#3c1a3d" }}
                    >
                      {t.nombre}
                    </h5>
                    <p className="card-text small mb-0">{t.descripcion}</p>
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
