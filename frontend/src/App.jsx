import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import logo from "../assets/logo.png";
import MateriaPrima from "./pages/MateriaPrima";

function App() {
  return (
    <Router>
      <div className="container">
        {/* SIDEBAR */}
        <aside className="sidebar">
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
        </aside>

        <Routes>
          <Route path="/materia-prima" element={<MateriaPrima />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
