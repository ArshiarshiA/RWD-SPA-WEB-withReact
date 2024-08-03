import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Products/Products";
import Service from "./pages/Services/service";
import Foresight from "./pages/Foresight/Foresight";
import Er404 from "./components/notFound/er404";
import './index.css'
import './scrollbar.css'
import Price from "./pages/Pricing/Price";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Service />} />
        <Route path="/foresight" element={<Foresight />} />
        <Route path="/pricing/:id" element={<Price />} />
        <Route path="*" element={<Er404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;