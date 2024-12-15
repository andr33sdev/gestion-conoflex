import React from 'react'
import logo from "../../assets/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="brand">
                <img src={logo} alt="logo flexcore" width={"200px"} />
            </div>
            <nav>
                <ul>
                    <li className="active">
                        <a className="link" href="/dashboard">
                            <span className="icon">📊</span> Dashboard
                        </a>
                    </li>
                    <li>
                        <a className="link" href="/materia-prima">
                            <span className="icon">🪣</span> Materia Prima
                        </a>
                    </li>
                    <li>
                        <a className="link" href="/matrices">
                            <span className="icon">⛓️</span> Matrices
                        </a>
                    </li>
                    <li>
                        <a className="link" href="/dashboard">
                            <span className="icon">🏪</span> Store
                        </a>
                    </li>
                    <li>
                        <a className="link" href="/dashboard">
                            <span className="icon">👥</span> Visitor
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar