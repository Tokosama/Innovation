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
    <>
      <header
        className={`header relative p-0 ${
          location.pathname === "/" ||
          location.pathname === "/AboutUs" ||
          location.pathname === "/Contact"
            ? ""
            : "bg-fixed bg-center"
        }`}
        style={{
          backgroundImage: `url(${props.headImg})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`absolute inset-0 ${
            location.pathname === "/AboutUs" || location.pathname === "/Contact"
              ? "bg-black opacity-80"
              : "bg-black opacity-50"
          }`}
        ></div>

        <div className="mx-auto max-w-7xl py-5 md:px-2 relative pb-24 md:pb-32 ">
          <Navbar />

          <div className="header-content  mt-8 md:mt-12 ">
            <h1
              className={`${
                location.pathname === "/AboutUs"
                  ? "text-[30px]"
                  : "text-[30px] md:text-[80px]"
              } mb-5`}
            >
              {props.headTitre}
            </h1>
            <p
              className={`${
                location.pathname === "/"
                  ? "text-lg"
                  : location.pathname === "/AboutUs"
                  ? "md:text-[80px] font-bold"
                  : "text-base"
              }`}
            >
              {props.headContent}
            </p>
            {location.pathname === "/" ? (
              <button className="header-button ">FIND YOUR STYLE</button>
            ) : location.pathname === "/AboutUs" ||
              location.pathname === "/Contact" ? (
              ""
            ) : (
              <div>
                {" "}
                <Link to={"/"}>Home</Link> » {props.headTitre}
              </div>
            )}
          </div>
        </div>
      </header>
      <div
        className="fixed z-50 shadow-md flex items-center justify-between px-3 right-0 top-1/2 transform -translate-y-1/2 bg-white w-32 h-12 cursor-pointer"
        onClick={() => alert("Icône cliquée!")}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M7 0.25C3.2725 0.25 0.25 3.2725 0.25 7C0.25 10.7275 3.2725 13.75 7 13.75C7.6225 13.75 8.125 13.2475 8.125 12.625C8.125 12.3325 8.0125 12.07 7.8325 11.8675C7.66 11.6725 7.5475 11.41 7.5475 11.125C7.5475 10.5025 8.05 10 8.6725 10H10C12.07 10 13.75 8.32 13.75 6.25C13.75 2.935 10.7275 0.25 7 0.25ZM2.875 7C2.2525 7 1.75 6.4975 1.75 5.875C1.75 5.2525 2.2525 4.75 2.875 4.75C3.4975 4.75 4 5.2525 4 5.875C4 6.4975 3.4975 7 2.875 7ZM5.125 4C4.5025 4 4 3.4975 4 2.875C4 2.2525 4.5025 1.75 5.125 1.75C5.7475 1.75 6.25 2.2525 6.25 2.875C6.25 3.4975 5.7475 4 5.125 4ZM8.875 4C8.2525 4 7.75 3.4975 7.75 2.875C7.75 2.2525 8.2525 1.75 8.875 1.75C9.4975 1.75 10 2.2525 10 2.875C10 3.4975 9.4975 4 8.875 4ZM11.125 7C10.5025 7 10 6.4975 10 5.875C10 5.2525 10.5025 4.75 11.125 4.75C11.7475 4.75 12.25 5.2525 12.25 5.875C12.25 6.4975 11.7475 7 11.125 7Z"
            fill="#2563EB"
          ></path>{" "}
        </svg>
        <span className="text-[15px] normal-case leading-4 font-medium tracking-normal pointer-events-none font-DM-sans">Customize</span>
      </div>
    </>
  );
}

export default Header;
