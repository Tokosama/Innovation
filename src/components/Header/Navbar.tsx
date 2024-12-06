import { Link } from "react-router-dom";


export function Navbar ()  {
  return (
    
        <nav className="navbar flex justify-between mb-36">
          <div className="navbar-logo h-16">
          <Link to="/"><img
              src="innovlogo.png"
              alt="Logo"
            /></Link>

            
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="/LivingRoom">Living Room</Link>
            </li>
            <li>
              <Link to="/Kitchen">Kitchen</Link>
            </li>
            <li>
              <Link to="#outdoors">Outdoors</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
       
    
  );
};

export default Navbar;
