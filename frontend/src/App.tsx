import "mapbox-gl/dist/mapbox-gl.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "./App.css";
import { Map } from "./components/Map/Map";

function App() {
  return <div className="app_defaultLayout">
    <div className="app_menu">
      Your future Menu here :)
    </div>
    <div className="app_map">
      <Map />
    </div>
  </div>;
}

export default App;
