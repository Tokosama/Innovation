
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Kitchen from "./pages/Kitchen";
import LivingRoom from "./pages/LivingRoom";

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/LivingRoom" element={<LivingRoom />} />

        
      </Routes>
    </Router>
  
  );
};



export default App
