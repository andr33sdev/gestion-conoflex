import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment-timezone";

import "./MateriaPrima.css";

const MateriaPrima = () => {
  const [materiasPrimas, setMateriasPrimas] = useState([]);

  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/materia-prima/${id}`);
  };

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
  }, []);

  return (
    <div className="main-content">
      <header>
        <h1>Materia Prima</h1>
        <div className="header-right">
          <input type="search" placeholder="Type here to start searching..." />
          <a href="/nueva-materia-prima" className="add-mp-btn">
            Agregar nueva 🟢
          </a>
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
              <th>Última modificación</th>
            </tr>
          </thead>
          <tbody>
            {materiasPrimas.map((materiaPrima) => (
              <tr
                key={materiaPrima._id}
                onClick={() => handleRowClick(materiaPrima._id)}
                className="materia-prima-row"
              >
                <td>{materiaPrima.code}</td>
                <td>{materiaPrima.stock}</td>
                <td>{materiaPrima.min_stock}</td>
                <td>
                  {/* Verifica si updatedAt es válido y luego aplica el formato */}
                  {materiaPrima.updatedAt
                    ? moment(materiaPrima.updatedAt)
                        .tz("America/Argentina/Buenos_Aires")
                        .format("DD/MM/YYYY HH:mm:ss")
                    : "Sin datos"}{" "}
                  {/* Si no hay fecha, muestra "Sin datos" */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MateriaPrima;
