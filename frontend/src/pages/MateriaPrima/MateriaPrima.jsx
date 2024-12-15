import React, { useEffect, useState } from "react";
import axios from "axios";

import "./MateriaPrima.css";

const MateriaPrima = () => {
  const [materiasPrimas, setMateriasPrimas] = useState([]);

  const fetchMateriaPrima = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/materia-prima"
      );
      setMateriasPrimas(response.data);
    } catch (error) {
      console.error("Error fetching materias primas", error);
    }
  };

  useEffect(() => {
    fetchMateriaPrima();
    console.log(materiasPrimas)
  }, []);

  return (
    <div className="main-content">
      <header>
        <h1>Materia Prima</h1>
        <div className="header-right">
          <input type="search" placeholder="Type here to start searching..." />
          <a href="/nueva-materia-prima" className="add-mp-btn">Agregar nueva 🟢</a>
        </div>
      </header>

      {/* MATERIAS PRIMAS TABLE */}
      <div className="materia-prima-table">
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Stock</th>
              <th>Stock mínimo</th>
              <th>Fecha actualización</th>
            </tr>
          </thead>
          <tbody>
            {materiasPrimas.map((materiaPrima) => (
              <tr key={materiaPrima._id}>
                <td>{materiaPrima.code}</td>
                <td>{materiaPrima.stock}</td>
                <td>{materiaPrima.min_stock}</td>
                <td>{materiaPrima.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MateriaPrima;
