import React from "react";
import { Link, useLocation } from "react-router-dom"; // Importamos `useLocation` para obtener la ruta activa
import logo from "../../assets/logo.png";

const Sidebar = () => {
  const location = useLocation(); // Obtenemos la ruta actual con `useLocation`

  return (
    <div className="flex flex-col my-auto ml-3 p-5 bg-zinc-800 rounded-xl" style={{height:"95vh", width:"20vw"}}>
      <div>
        <img src={logo} alt="logo flexcore" className="w-64 mt-3" />
      </div>
      <nav className="mt-8 text-white">
        <ul className="space-y-5">
          <li className={location.pathname === "/dashboard" ? "active" : ""}>
            <Link className="link" to="/dashboard">
              {" "}
              {/* Usamos `Link` de React Router */}
              <span className="mr-3">📊</span> Dashboard
            </Link>
          </li>
          <li
            className={location.pathname === "/materia-prima" ? "active" : ""}
          >
            <Link className="link" to="/materia-prima">
              {" "}
              {/* Usamos `Link` de React Router */}
              <span className="mr-3">🪣</span> Materia Prima
            </Link>
          </li>
          <li className={location.pathname === "/matrices" ? "active" : ""}>
            <Link className="link" to="/matrices">
              {" "}
              {/* Usamos `Link` de React Router */}
              <span className="mr-3">⛓️</span> Matrices
            </Link>
          </li>
          <li className={location.pathname === "/store" ? "active" : ""}>
            <Link className="link" to="/store">
              {" "}
              {/* Usamos `Link` de React Router */}
              <span className="mr-3">🏪</span> Store
            </Link>
          </li>
          <li className={location.pathname === "/visitor" ? "active" : ""}>
            <Link className="link" to="/visitor">
              {" "}
              {/* Usamos `Link` de React Router */}
              <span className="mr-3">👥</span> Visitor
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
