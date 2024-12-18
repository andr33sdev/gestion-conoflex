import React from "react";
import { Link, useLocation } from "react-router-dom"; // Importamos `useLocation` para obtener la ruta activa
import logo from "../../assets/logo.png";

const Sidebar = () => {
  const location = useLocation(); // Obtenemos la ruta actual con `useLocation`

  return (
    <div className="flex flex-col my-auto ml-5 p-5 bg-zinc-800 rounded-xl" style={{ height: "95vh", width: "20vw" }}>
      <div className="ml-8">
        <img src={logo} alt="logo flexcore" className="w-64 mt-3" />
      </div>
      <nav className="mt-12 ml-8 text-white">
        <ul className="space-y-5">
          <li className={location.pathname === "/dashboard" ? "bg-purple-400 rounded-lg w-48 font-bold p-3" : "p-3"}>
            <Link className="link" to="/dashboard">
              <span className="mr-3">📊</span> Dashboard
            </Link>
          </li>
          <li
            className={location.pathname === "/materia-prima" ? "bg-purple-400 rounded-lg w-48 font-bold p-3" : "p-3"}
          >
            <Link className="link" to="/materia-prima">
              <span className="mr-3">🪣</span> Materia Prima
            </Link>
          </li>
          <li className={location.pathname === "/matrices" ? "bg-purple-400 rounded-lg w-48 font-bold p-3" : "p-3"}>
            <Link className="link" to="/matrices">
              <span className="mr-3">⛓️</span> Matrices
            </Link>
          </li>
          <li className={location.pathname === "/store" ? "bg-purple-400 rounded-lg w-48 font-bold p-3" : "p-3"}>
            <Link className="link" to="/store">
              <span className="mr-3">🏪</span> Store
            </Link>
          </li>
          <li className={location.pathname === "/visitor" ? "bg-purple-400 rounded-lg w-48 font-bold p-3" : "p-3"}>
            <Link className="link" to="/visitor">
              <span className="mr-3">👥</span> Visitor
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
