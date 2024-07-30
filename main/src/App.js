import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhyUs from "./components/MainWhyUsCompo/About";
import ProductSec from "./components/Products/ProductsSec";
import ServiceSec from "./components/Services/ServicesSec";
import Foresight from "./components/Foresight/ForesightSec";
import Er404 from "./components/notFound/er404";
import './index.css'
import './scrollbar.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhyUs />} />
        <Route path="/products" element={<ProductSec />} />
        <Route path="/services" element={<ServiceSec />} />
        <Route path="/foresight" element={<Foresight />} />
        <Route path="*" element={<Er404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;