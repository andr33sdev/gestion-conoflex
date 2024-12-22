import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router-dom";

const DetalleMateriaPrima = () => {
  const { id } = useParams();
  const [materiaPrima, setMateriaPrima] = useState({});
  const [movimientosMP, setMovimientosMP] = useState([]);

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

  const fetchMovimientosMateriaPrima = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/movimientos-mp"
      );
      // Filtrar los movimientos que coinciden con el id de la materia prima
      const movimientosFiltrados = response.data.filter(
        (movimiento) => movimiento.material === id
      );

      setMovimientosMP(movimientosFiltrados);
    } catch (error) {
      console.error("Error fetching materias primas", error);
    }
  }

  const addStock = () => {
    const ingresoStock = prompt("Ingresa el stock a añadir")
    const cantidad = parseFloat(ingresoStock);

    axios.put(`http://localhost:3000/api/materia-prima/add-stock/${id}`, null, {
      params: {
        qty: cantidad,
      }
    })
      .then((response) => {
        console.log("Stock actualizado:", response.data);
        alert("Stock actualizado exitosamente.");
      })
      .catch((error) => {
        console.error("Error actualizando el stock:", error);
        alert("Hubo un error al actualizar el stock.");
      });

  }

  const subtractStock = () => {
    const restaStock = prompt("Ingresa el stock a restar")
    const cantidad = parseFloat(restaStock);

    axios.put(`http://localhost:3000/api/materia-prima/subtract-stock/${id}`, null, {
      params: {
        qty: cantidad,
      }
    })
      .then((response) => {
        console.log("Stock actualizado:", response.data);
        alert("Stock actualizado exitosamente.");
      })
      .catch((error) => {
        console.error("Error actualizando el stock:", error);
        alert("Hubo un error al actualizar el stock.");
      });

  }

  useEffect(() => {
    fetchMateriaPrimaById(id);
    fetchMovimientosMateriaPrima();
  }, []);

  if (!materiaPrima) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="text-white pt-8 px-20 h-screen">
      <div className="flex flex-col">
        <div className="grid grid-cols-4 grid-rows-1 gap-5">
          <div className="bg-purple-400 p-4 rounded-lg">
            Código <p>{materiaPrima.code}</p>
            <button>Editar</button>
          </div>
          <div className="bg-purple-400 p-4 rounded-lg">
            <p>Proveedores</p>
            <button>Editar</button>
          </div>
          <div className="bg-purple-400 p-4 rounded-lg">
            Stock <p>{materiaPrima.stock}</p>
            <div className="flex flex-col space-y-2 mt-5">
              <button onClick={addStock} className="bg-purple-600 rounded-lg text-white p-2 hover:bg-purple-700 transition-all">Ingresar stock</button>
              <button onClick={subtractStock} className="bg-purple-600 rounded-lg text-white p-2 hover:bg-purple-700 transition-all">Decrementar stock</button>
            </div>
          </div>
          <div className="bg-purple-400 p-4 rounded-lg">
            Consumos promedio
            <p>Semanal:</p>
            <p>Mensual:</p>
            <p>Anual:</p>
          </div>
        </div>

        <table className="table-fixed bg-zinc-800 rounded-lg w-full text-center text-slate-200 mt-10">
          <thead>
            <tr className="border-b-2 border-zinc-700 uppercase">
              <th className="p-2">Tipo de movimiento</th>
              <th>Cantidad</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {movimientosMP.map((movimiento) => (
              <tr
                key={movimiento._id}
                className="border-b-2 border-zinc-700 hover:bg-purple-400 hover:cursor-pointer"
              >
                <td className="p-2">{movimiento.type}</td>
                <td>{movimiento.qty}</td>
                <td>{movimiento.date ? moment(movimiento.date)
                  .tz("America/Argentina/Buenos_Aires")
                  .format("DD/MM/YYYY HH:mm:ss")
                  : "Sin datos"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default DetalleMateriaPrima;
