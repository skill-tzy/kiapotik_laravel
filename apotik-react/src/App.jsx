import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Katalog from "./pages/Katalog";
import Kontak from "./pages/Kontak";
import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";
import KTadmin from "./pages/KTadmin";
import KTuser from "./pages/KTuser";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/ktadmin" element={<KTadmin />} />
        <Route path="/ktuser" element={<KTuser />} />
      </Routes>
  );
}

export default App;
