const MateriaPrima = require("../models/MateriaPrima");

// Obtener todas las materias primas
exports.getAllMateriasPrimas = async (req, res) => {
    try {
      const materiasPrimas = await MateriaPrima.find();
      res.status(200).json(materiasPrimas);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };