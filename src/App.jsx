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

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 text-[#3c1a3d]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/juego" element={<Juego />} />
          <Route path="/dias" element={<Dias />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:id" element={<Noticia />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
