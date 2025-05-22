import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Mapa from "./routes/Mapa";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 text-[#3c1a3d]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
