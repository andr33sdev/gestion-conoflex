import React, { useState } from 'react';
import axios from "axios";
import "./MateriaPrima.css";

const NuevaMateriaPrima = () => {

    const [data, setData] = useState({ code: "", stock: 0, min_stock: 0 })

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/materia-prima", data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='main-content'>
            <h2 className='new-mp-title'>Crea la nueva materia prima</h2>
            <form className='new-mp-form' onSubmit={handleSubmit}>
                <label htmlFor="code">Código</label>
                <input onChange={handleChange} type="text" name="code" id="code" />
                <label htmlFor="stock">Stock</label>
                <input onChange={handleChange} type="number" name="stock" id="stock" />
                <label htmlFor="min_stock">Stock mínimo</label>
                <input onChange={handleChange} type="number" name="min_stock" id="min_stock" />
                <button className='add-mp-btn-form'>Agregar</button>
            </form>
        </div>
    )
}

export default NuevaMateriaPrima