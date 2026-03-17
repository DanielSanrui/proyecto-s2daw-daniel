import { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import templos from "../data/Templos.json";
import "../css/Mapa.css";

const containerStyle = {
  width: "100%",
  height: "75vh",
};

function Mapa() {
  const [userPosition, setUserPosition] = useState(null);
  const [selected, setSelected] = useState(null);
  const [cercanos, setCercanos] = useState([]);
  const [hoveredTemplo, setHoveredTemplo] = useState(null);
  const [map, setMap] = useState(null);
  const [hasCentered, setHasCentered] = useState(false);

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

  const formatDistance = (meters) => {
    if (meters < 1000) return `${Math.round(meters)} m`;
    return `${(meters / 1000).toFixed(1)} km`;
  };

  useEffect(() => {
    if (!navigator.geolocation) return;

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserPosition(coords);

        const cercanosFiltrados = templos
          .map((t) => ({
            ...t,
            distancia: distance(coords, { lat: t.lat, lng: t.lng }),
          }))
          .filter((t) => t.distancia <= 1000)
          .sort((a, b) => a.distancia - b.distancia);

        setCercanos(cercanosFiltrados);
      },
      (error) => {
        console.error("Error al obtener la ubicación", error);
        const fallback = { lat: 37.3841, lng: -6.0008 };
        setUserPosition(fallback);

        const cercanosFiltrados = templos
          .map((t) => ({
            ...t,
            distancia: distance(fallback, { lat: t.lat, lng: t.lng }),
          }))
          .filter((t) => t.distancia <= 1000)
          .sort((a, b) => a.distancia - b.distancia);

        setCercanos(cercanosFiltrados);
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 15000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const initialCenterRef = useRef(null);

  useEffect(() => {
    if (map && userPosition && !hasCentered) {
      initialCenterRef.current = userPosition;
      map.panTo(userPosition);
      map.setZoom(16);
      setHasCentered(true);
    }
  }, [userPosition, map, hasCentered]);

  const handleTemploHover = (templo) => {
    setHoveredTemplo(templo);
    if (map && templo) {
      map.panTo({ lat: templo.lat, lng: templo.lng });
    }
  };

  return (
    <div>
      {/* ── CABECERA ── */}
      <section className="mapa-header">
        <div className="mapa-header__overlay" />
        <div className="mapa-header__contenido">
          <h1 className="mapa-header__titulo">Mapa de Hermandades</h1>
          <div className="mapa-header__linea" />
          <p className="mapa-header__subtitulo">
            Consulta los templos más importantes y descubre si estás cerca
          </p>
        </div>
      </section>

      <div className="container py-4">
        {/* ── MAPA ── */}
        <LoadScript
          googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          libraries={["geometry"]}
        >
          {userPosition && (
            <div className="mapa-wrap">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={initialCenterRef.current || { lat: 37.3841, lng: -6.0008 }}
                zoom={15}
                onLoad={(mapInstance) => setMap(mapInstance)}
              >
                {templos.map((templo, index) => (
                  <Marker
                    key={index}
                    position={{ lat: templo.lat, lng: templo.lng }}
                    onClick={() => setSelected(templo)}
                    title={templo.nombre}
                    icon={{
                      path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z",
                      fillColor: hoveredTemplo?.nombre === templo.nombre ? "#c9a24d" : "#3c1a3d",
                      fillOpacity: 1,
                      strokeColor: "#c9a84c",
                      strokeWeight: 1.5,
                      scale: hoveredTemplo?.nombre === templo.nombre ? 2 : 1.5,
                      anchor: window.google?.maps ? new window.google.maps.Point(12, 22) : undefined,
                    }}
                  />
                ))}

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
            </div>
          )}
        </LoadScript>

        {/* ── TEMPLOS CERCANOS ── */}
        {cercanos.length > 0 && (
          <section className="mapa-cercanos">
            <h2 className="mapa-cercanos__titulo">
              Templos cercanos
              <span className="mapa-cercanos__count">{cercanos.length}</span>
            </h2>
            <div className="mapa-cercanos__lista">
              {cercanos.map((t, i) => (
                <div
                  key={i}
                  className={`mapa-templo ${hoveredTemplo?.nombre === t.nombre ? "mapa-templo--activo" : ""}`}
                  onMouseEnter={() => handleTemploHover(t)}
                  onMouseLeave={() => setHoveredTemplo(null)}
                  onClick={() => setSelected(t)}
                >
                  <img
                    src={t.imagen}
                    alt={t.nombre}
                    className="mapa-templo__img"
                  />
                  <div className="mapa-templo__info">
                    <h5 className="mapa-templo__nombre">{t.nombre}</h5>
                    <p className="mapa-templo__desc">{t.descripcion}</p>
                  </div>
                  <span className="mapa-templo__distancia">
                    {formatDistance(t.distancia)}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Mapa;
