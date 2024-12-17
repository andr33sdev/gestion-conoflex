import React, { useState } from "react";
import axios from "axios";

const NuevaMateriaPrima = () => {
  const [data, setData] = useState({ code: "", stock: 0, min_stock: 0 });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/materia-prima",
        data
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-2/4 mt-8 px-20">
      <h2 className="text-2xl text-white">Crea la nueva materia prima</h2>
      <form
        className="w-full max-w-lg text-white flex flex-col mt-5"
        onSubmit={handleSubmit}
      >
        <label htmlFor="code">Código</label>
        <input
          className="bg-neutral-950 border-b-2 border-purple-400 outline-none mb-8 focus:border-b-4 focus:border-purple-400 transition-all"
          onChange={handleChange}
          type="text"
          name="code"
          id="code"
        />
        <label htmlFor="stock">Stock</label>
        <input
          className="bg-neutral-950 border-b-2 border-purple-400 outline-none mb-8 focus:border-b-4 focus:border-purple-400 transition-all"
          onChange={handleChange}
          type="number"
          name="stock"
          id="stock"
        />
        <label htmlFor="min_stock">Stock mínimo</label>
        <input
          className="bg-neutral-950 border-b-2 border-purple-400 outline-none mb-8 focus:border-b-4 focus:border-purple-400 transition-all"
          onChange={handleChange}
          type="number"
          name="min_stock"
          id="min_stock"
        />
        <button className="bg-purple-400 w-28 rounded-md font-bold mt-5 p-2 hover:bg-purple-600 transition-all">Agregar</button>
      </form>
    </div>
  );
};

export default NuevaMateriaPrima;
