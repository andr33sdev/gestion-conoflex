import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import MateriaPrima from "./pages/MateriaPrima";
import NuevaMateriaPrima from "./pages/NuevaMateriaPrima";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/materia-prima" element={<MateriaPrima />} />
          <Route path="/nueva-materia-prima" element={<NuevaMateriaPrima />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
