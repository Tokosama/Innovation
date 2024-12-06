
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Kitchen from "./pages/Kitchen";
import AboutUs from "./pages/AboutUS";
const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/AboutUs" element={<AboutUs />} />

        
      </Routes>
    </Router>
  
  );
};



export default App
