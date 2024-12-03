import "./Header.css";
import Navbar from "./Navbar";
import { useLocation,Link } from "react-router-dom";

export interface headInt {
  headTitre: string;
  headContent: string;
  headImg: string;
}

export function Header(props: headInt) {
  const location = useLocation();
  return (
    <header className="header p-0 ">
      <div className="mx-auto max-w-7xl py-5 px-2">
        <Navbar />

        <div className="header-content">
          <h1 className="mb-5">{props.headTitre}</h1>
          <p>{props.headContent}</p>
          {location.pathname ==='/'? <button className="header-button">FIND YOUR STYLE</button> : <div><Link to={"/"}>Home</Link> » {props.headTitre}</div> }
        </div>
      </div>
    </header>
  );
}

export default Header;
