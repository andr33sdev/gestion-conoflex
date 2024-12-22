const MovimientoMateriaPrima = require("../models/movimientoMateriaPrima");

// Obtener todas las materias primas
exports.getAllMovimientosMateriaPrima = async (req, res) => {
    try {
      const movimientosMateriaPrima = await MovimientoMateriaPrima.find();
      res.status(200).json(movimientosMateriaPrima);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };