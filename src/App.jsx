import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Mapa from "./routes/Mapa";
import Juego from "./routes/Juego";
import Dias from "./routes/Dias";
import Multimedia from "./routes/Multimedia";
import Noticias from "./routes/Noticias";
import Noticia from "./routes/Noticia";
import Tiempo from "./routes/Tiempo";
import Hermandades from "./routes/Hermandades";
import Hermandad from "./routes/Hermandad";
import Dia from "./routes/Dia";

function App() {
  return (
    <>
      <Header />
      <main
        className="bg-light py-4"
        style={({ minHeight: "100vh" }, { color: "#3c1a3d" })}
      >
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mapa" element={<Mapa />} />
            <Route path="/juego" element={<Juego />} />
            <Route path="/dias" element={<Dias />} />
            <Route path="/dias/:nombreDia" element={<Dia />} />
            <Route path="/multimedia" element={<Multimedia />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:id" element={<Noticia />} />
            <Route path="/tiempo" element={<Tiempo />} />
            <Route path="/hermandades" element={<Hermandades />} />
            <Route path="/hermandades/:slug" element={<Hermandad />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
