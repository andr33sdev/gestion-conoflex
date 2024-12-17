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
    <div className="main-content">
      <div className="container materia-prima-dashboard">
        <div className="materia-prima-card-data">
          Código <p>{materiaPrima.code}</p>
          <button>Editar</button>
        </div>
        <div className="materia-prima-card-data">
          <p>Proveedores</p>
          <button>Editar</button>
        </div>
        <div className="materia-prima-card-data">
          Stock <p>{materiaPrima.stock}</p>
          <button>Editar</button>
        </div>
        <div className="materia-prima-card-data">
          Consumos promedio
          <p>Semanal:</p>
          <p>Mensual:</p>
          <p>Anual:</p>
        </div>
        <div className="materia-prima-table materia-prima-dashboard">
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
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetalleMateriaPrima;
