import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SeaLevelRise from "./pages/SeaLevelRise";
import ShorelineChange from "./pages/ShorelineChange";
import PlasticWaste from "./pages/PlasticWaste";
import MangroveHealth from "./pages/MangroveHealth";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sea-level-rise" element={<SeaLevelRise />} />
        <Route path="/shoreline-change" element={<ShorelineChange />} />
        <Route path="/plastic-waste" element={<PlasticWaste />} />
        <Route path="/mangrove-health" element={<MangroveHealth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
import MasterMap from "./pages/MasterMap";

<Route path="/master-map" element={<MasterMap />} />;

export default App;
