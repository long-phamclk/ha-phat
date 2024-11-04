import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GioiThieu from "./pages/GioiThieu";
import SanPham from "./pages/SanPham";
import DuAn from "./pages/DuAn";
import NhanSu from "./pages/NhanSu";
import LienHe from "./pages/LienHe";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioithieu" element={<GioiThieu />} />
        <Route path="/sanpham" element={<SanPham />} />
        <Route path="/duan" element={<DuAn />} />
        <Route path="/nhansu" element={<NhanSu />} />
        <Route path="/lienhe" element={<LienHe />} />
      </Routes>
    </Router>
  );
};

export default App;
