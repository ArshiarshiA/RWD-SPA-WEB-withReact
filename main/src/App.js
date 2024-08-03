import { useRoutes } from "react-router-dom";
import allRoutes from './routes'
import './index.css'
import './scrollbar.css'

function App() {
  let routes = useRoutes(allRoutes)
  return routes
}

export default App;