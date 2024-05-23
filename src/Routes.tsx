
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mario from "./pages/Home/Section/Projects/Mario";
import TodoLis from "./pages/Home/Section/Projects/TodoLis";
import Portifolio2 from "./pages/Home/Section/Projects/Portifolio2"
import Cafe from "./pages/Home/Section/Projects/Cafe"
import Home from "./pages/Home/Home";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoLis" element={<TodoLis />} />
        <Route path="/Mario" element={<Mario />} />
        <Route path="/Portifolio2" element={<Portifolio2 />} />
        <Route path="/Cafe" element={<Cafe />} />
    
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
