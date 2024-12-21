import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment-timezone";
// Prueba

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
    <div className="flex flex-col w-full pt-8 px-20 h-screen">
      {" "}
      {/* Asegura que el contenedor principal ocupe toda la altura de la pantalla */}
      <header className="flex flex-row justify-between mb-4">
        {" "}
        {/* Agregado margen inferior para separar del contenido */}
        <h1 className="text-3xl text-white">Materia Prima</h1>
        <div className="bg-purple-400 rounded-lg h-8 w-36 text-center hover:bg-white hover:text-gray-950 hover:cursor-pointer transition-all">
          <a href="/nueva-materia-prima">Agregar nueva 🟢</a>
        </div>
      </header>
      {/* MATERIAS PRIMAS TABLE */}
      <div
        className="overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 150px)" }}
      >
        {" "}
        {/* Contenedor con scroll solo para la tabla */}
        <table className="table-fixed bg-zinc-800 rounded-lg w-full text-center text-slate-200">
          <thead>
            <tr className="border-b-2 border-zinc-700 uppercase">
              <th className="p-2">Código</th>
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
                className="border-b-2 border-zinc-700 hover:bg-purple-400 hover:cursor-pointer"
              >
                <td className="p-2">{materiaPrima.code}</td>
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
