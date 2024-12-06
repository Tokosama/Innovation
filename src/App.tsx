
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Kitchen from "./pages/Kitchen";
import AboutUs from "./pages/AboutUs";
import Outdoors from "./pages/Outdoors";
import Contact from "./pages/Contact";
const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Outdoors" element={<Outdoors />} />
        <Route path="/Contact" element={<Contact />} />

        
      </Routes>
    </Router>
  
  );
};



export default App
