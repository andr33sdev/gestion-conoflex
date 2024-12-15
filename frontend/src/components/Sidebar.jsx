import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importamos `useLocation` para obtener la ruta activa
import logo from "../../assets/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
    const location = useLocation(); // Obtenemos la ruta actual con `useLocation`

    return (
        <div className="sidebar">
            <div className="brand">
                <img src={logo} alt="logo flexcore" width={"200px"} />
            </div>
            <nav>
                <ul>
                    <li className={location.pathname === '/dashboard' ? 'active' : ''}>
                        <Link className="link" to="/dashboard"> {/* Usamos `Link` de React Router */}
                            <span className="icon">📊</span> Dashboard
                        </Link>
                    </li>
                    <li className={location.pathname === '/materia-prima' ? 'active' : ''}>
                        <Link className="link" to="/materia-prima"> {/* Usamos `Link` de React Router */}
                            <span className="icon">🪣</span> Materia Prima
                        </Link>
                    </li>
                    <li className={location.pathname === '/matrices' ? 'active' : ''}>
                        <Link className="link" to="/matrices"> {/* Usamos `Link` de React Router */}
                            <span className="icon">⛓️</span> Matrices
                        </Link>
                    </li>
                    <li className={location.pathname === '/store' ? 'active' : ''}>
                        <Link className="link" to="/store"> {/* Usamos `Link` de React Router */}
                            <span className="icon">🏪</span> Store
                        </Link>
                    </li>
                    <li className={location.pathname === '/visitor' ? 'active' : ''}>
                        <Link className="link" to="/visitor"> {/* Usamos `Link` de React Router */}
                            <span className="icon">👥</span> Visitor
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
