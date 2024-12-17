import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MateriaPrima from "./pages/MateriaPrima/MateriaPrima";
import DetalleMateriaPrima from "./pages/MateriaPrima/DetalleMateriaPrima";
import NuevaMateriaPrima from "./pages/MateriaPrima/NuevaMateriaPrima";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex flex-row h-screen w-screen bg-neutral-950">
        <Sidebar />
        <div className="w-4/5">
          <Routes>
            <Route path="/materia-prima" exact element={<MateriaPrima />} />
            <Route
              path="/materia-prima/:id"
              element={<DetalleMateriaPrima />}
            />
            <Route
              path="/nueva-materia-prima"
              exact
              element={<NuevaMateriaPrima />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
