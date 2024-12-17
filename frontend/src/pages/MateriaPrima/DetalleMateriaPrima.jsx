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
    <div>
      <p>{materiaPrima._id}</p>
      <p>{materiaPrima.code}</p>
      <p>{materiaPrima.stock}</p>
      <p>{materiaPrima.min_stock}</p>
    </div>
  );
};

export default DetalleMateriaPrima;
