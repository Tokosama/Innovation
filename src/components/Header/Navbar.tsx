import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [show, setShow] = useState(false);
  

  return (
    <>
      <nav className="navbar mb-36  ">
        <div className="flex items-center justify-between relative z-10 ">
          <div
            className="absolute inset-y-0 right-0 flex  md:hidden "
            onClick={() => setShow(!show)}
          >
            <button
              type="button"
              className=" items-center justify-center rounded-md p-2 mr-2 bg-[#FF0E47] text-white  hover:text-white "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className=" size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div
            className="flex flex-1   sm:items-stretch sm:justify-start"
            onClick={() => console.log("try")}
          >
            <Link to="/">
              <img
                src="innovlogo.png"
                alt="Logo"
              />
            </Link>
          </div>
          <ul className="navbar-links  hidden md:ml-6 md: md:flex">
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/LivingRoom">Living Room</Link>
            </li>
            <li>
              <Link to="/Kitchen">Kitchen</Link>
            </li>
            <li>
              <Link to="/Outdoors">Outdoors</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div></div>
        <div
          className={` mt-3 absolute z-10 w-[100vw] bg-[#F5F5F5] text-black  md:hidden ${
            !show ? "hidden" : ""
          }`}
          id="mobile-menu"
        >
          <div className="space-y-1   pt-2">
            <Link
              to="/AboutUs"
              className="block border-b rounded-md px-3 py-2 text-base font-medium  hover:text-red-500"
              aria-current="page"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="block border-b rounded-md px-3 py-2 text-base font-medium  hover:text-red-500"
            >
              Living Room
            </Link>
            <Link
              to="/Kitchen"
              className="block border-b rounded-md px-3 py-2 text-base font-medium  hover:text-red-500"
            >
              Kitchen{" "}
            </Link>
            <Link
              to="/Outdoors"
              className="block border-b rounded-md px-3 py-2 text-base font-medium  hover:text-red-500"
            >
              Outdoors{" "}
            </Link>
            <Link
              to="#"
              className="block border-b rounded-md px-3 py-2 text-base font-medium  hover:text-red-500"
            >
              Contact
            </Link>
          </div>
        </div>
        {/*mobile navBar */}
      </nav>
    </>
  );
}

export default Navbar;
