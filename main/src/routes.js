import Home from "./pages/Home/Home";
import Product from "./pages/Products/Products";
import Service from "./pages/Services/service";
import Foresight from "./pages/Foresight/Foresight";
import Er404 from "./components/notFound/er404";
import Price from "./pages/Pricing/Price";

let allRoutes = [
    { path: '/', element: <Home /> },
    { path: "/products", element: <Product /> },
    { path: '/services', element: <Service /> },
    { path: '/foresight', element: <Foresight /> },
    { path: '/pricing/:id', element: <Price /> },
    { path: '*', element: <Er404 /> }
]

export default allRoutes