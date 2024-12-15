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

// Crear una nueva materia prima
exports.createMateriaPrima = async (req, res) => {
  try {
    const newMateriaPrima = new MateriaPrima({
      code: req.body.code,
      stock: req.body.stock,
      min_stock: req.body.min_stock
    });

    const savedMateriaPrima = await newMateriaPrima.save();
    res.status(201).json(savedMateriaPrima);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

