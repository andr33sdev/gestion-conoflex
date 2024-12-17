import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import MateriaPrima from "./pages/MateriaPrima/MateriaPrima";
import DetalleMateriaPrima from "./pages/MateriaPrima/DetalleMateriaPrima";
import NuevaMateriaPrima from "./pages/MateriaPrima/NuevaMateriaPrima";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/materia-prima" exact element={<MateriaPrima />} />
          <Route path="/materia-prima/:id" element={<DetalleMateriaPrima />} />
          <Route path="/nueva-materia-prima" exact element={<NuevaMateriaPrima />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
