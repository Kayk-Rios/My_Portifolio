
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mario from "./pages/Home/Section/Projects/Mario";
import TodoLis from "./pages/Home/Section/Projects/TodoLis";
import Portifolio2 from "./pages/Home/Section/Projects/Portifolio2"
import Cafe from "./pages/Home/Section/Projects/Cafe"
import Home from "./pages/Home/Home";
import Food from "./pages/Home/Section/Projects/Food";
import SalaoBele from "./pages/Home/Section/Projects/Salao";
import Hospital from "./pages/Home/Section/Projects/Hospital";
import GalStore from "./pages/Home/Section/Projects/GalStore";
import Btech from "./pages/Home/Section/Projects/Btech";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoLis" element={<TodoLis />} />
        <Route path="/Mario" element={<Mario />} />
        <Route path="/Portifolio2" element={<Portifolio2 />} />
        <Route path="/Cafe" element={<Cafe />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Salao" element={<SalaoBele />} />
        <Route path="/Hospital" element={<Hospital />} />
        <Route path="/GalStore" element={<GalStore/>} />
        <Route path="/Btech" element={<Btech/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
