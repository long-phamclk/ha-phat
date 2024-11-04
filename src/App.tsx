import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import GioiThieu from "./pages/GioiThieu";
import SanPham from "./pages/SanPham";
import DuAn from "./pages/DuAn";
import NhanSu from "./pages/NhanSu";
import LienHe from "./pages/LienHe";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <GioiThieu />
      <SanPham />
      <DuAn />
      <NhanSu />
      <LienHe />
    </BrowserRouter>
  );
};

export default App;
