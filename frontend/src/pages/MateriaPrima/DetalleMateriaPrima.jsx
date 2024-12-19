import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetalleMateriaPrima = () => {
  const { id } = useParams();
  const [materiaPrima, setMateriaPrima] = useState({});

  const fetchMateriaPrimaById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/materia-prima/${id}`
      );
      setMateriaPrima(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMateriaPrimaById(id);
  }, []);

  if (!materiaPrima) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="text-white pt-8 px-20 w-full h-screen">
      <div className=" grid grid-cols-4 grid-rows-4 gap-5">
        <div className="bg-purple-400 p-2 rounded-lg">
          Código <p>{materiaPrima.code}</p>
          <button>Editar</button>
        </div>
        <div className="bg-purple-400 p-2 rounded-lg">
          <p>Proveedores</p>
          <button>Editar</button>
        </div>
        <div className="bg-purple-400 p-2 rounded-lg">
          Stock <p>{materiaPrima.stock}</p>
          <button>Editar</button>
        </div>
        <div className="bg-purple-400 p-2 rounded-lg">
          Consumos promedio
          <p>Semanal:</p>
          <p>Mensual:</p>
          <p>Anual:</p>
        </div>
        <div className="materia-prima-table materia-prima-dashboard">
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
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetalleMateriaPrima;
