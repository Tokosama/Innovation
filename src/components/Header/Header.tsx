import "./Header.css";
import Navbar from "./Navbar";
import { useLocation, Link } from "react-router-dom";

export interface headInt {
  headTitre: string;
  headContent: string;
  headImg: string;
  size: string;
}

export function Header(props: headInt) {
  const location = useLocation();
  return (
    <header
      className={`header p-0 ${
        location.pathname === "/" ||
        location.pathname === "AboutUs" ||
        location.pathname === "Contact"
          ? ""
          : "bg-fixed"
      }`}
      style={{
        backgroundImage: `url(${props.headImg})`,
        height: `${props.size}`,
      }}
    >
      <div className="mx-auto max-w-7xl py-5 px-2">
        <Navbar />

        <div className="header-content">
          <h1 className={`${location.pathname === "/AboutUs" ? "text-[20px]" : "text-[80px]"} mb-5`}>{props.headTitre}</h1>
          <p
            className={`${location.pathname === "/" ? "text-lg" : location.pathname === "/AboutUs" ? "text-[80px] font-bold" : "text-base" }`}
          >
            {props.headContent}
          </p>
          {location.pathname === "/" ? (
            <button className="header-button">FIND YOUR STYLE</button>
          ) : (
            <div>              <Link to={"/"}>Home</Link> » {props.headTitre}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
