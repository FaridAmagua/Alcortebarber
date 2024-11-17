import "./navbar.css";
import { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const collapseRef = useRef(null);

  const hiderBars = () => {
    setToggleNavbar(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-lg">
      <div className="container mx-auto px-4 max-w-screen-xl flex justify-between items-center py-4">
        {/* Logo */}
        <h1 className="text-2xl font-[RoberBold]">ALCORTEBARBER</h1>

        {/* Barra de búsqueda */}
        <div className="hidden md:flex flex-grow justify-center items-center">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-4 py-2 pl-10 border rounded-full shadow-sm w-full"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Botón redondo de usuario para escritorio */}
        <div className="hidden md:flex items-center relative">
          <button
            className="rounded-full p-2 hover:bg-gray-100"
            onClick={toggleDropdown}
          >
            <FaBars size={24} className="text-gray-600" />
          </button>
          {showDropdown && (
            <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-md">
              <ul>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-gray-900 bg-gray-100"
                        : "block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                    }
                    onClick={() => setShowDropdown(false)}
                  >
                    Iniciar sesión
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/help"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-gray-900 bg-gray-100"
                        : "block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                    }
                    onClick={() => setShowDropdown(false)}
                  >
                    Ayuda
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Botón de menú para móviles */}
        <div className="md:hidden">
          <Hamburger
            color="rgb(156 163 175)"
            size={24}
            toggled={toggleNavbar}
            toggle={setToggleNavbar}
          />
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      <div
        className={
          toggleNavbar
            ? "absolute left-0 h-screen z-10 transition-all duration-500 ease-in-out backdrop-blur-sm bg-zinc-900/30 border-solid py-4 md:hidden"
            : "absolute left-[-100vw] h-screen z-10 transition-all duration-500 ease-in-out backdrop-blur-sm bg-zinc-900/30 border-solid py-4 md:hidden"
        }
        ref={collapseRef}
      >
        <ul className="flex flex-col w-screen m-auto h-[50%] justify-center items-center text-2xl font-bold text-white">
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "py-4 px-6 text-gray-900"
                  : "py-4 px-6 text-gray-400 hover:text-gray-600"
              }
              onClick={hiderBars}
            >
              Iniciar sesión
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive
                  ? "py-4 px-6 text-gray-900"
                  : "py-4 px-6 text-gray-400 hover:text-gray-600"
              }
              onClick={hiderBars}
            >
              Ayuda
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
