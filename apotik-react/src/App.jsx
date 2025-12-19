import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
