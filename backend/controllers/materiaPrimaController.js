const MateriaPrima = require("../models/MateriaPrima");
const MovimientoMateriaPrima = require("../models/movimientoMateriaPrima");

// Obtener todas las materias primas
exports.getAllMateriasPrimas = async (req, res) => {
  try {
    const materiasPrimas = await MateriaPrima.find();
    res.status(200).json(materiasPrimas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener una materia prima por ID
exports.getMateriaPrimaById = async (req, res) => {
  try {
    const materiaPrima = await MateriaPrima.findById(req.params._id);
    if (materiaPrima) {
      res.status(200).json(materiaPrima);
    } else {
      res.status(404).json({ message: "Materia prima no encontrada" });
    }
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

// Ingresar stock a materia prima
exports.addStockMateriaPrima = async (req, res) => {
  try {
    // Crear el movimiento
    const nuevoMovimiento = new MovimientoMateriaPrima({
      type: 'ingreso',
      qty: Number(req.query.qty),
      material: req.params._id,
      date: Date.now(),
    });

    await nuevoMovimiento.save();

    // Actualizar el stock de la materia prima
    const materiaPrima = await MateriaPrima.findById(req.params._id);

    if (materiaPrima) {
      materiaPrima.stock += Number(req.query.qty);
      await materiaPrima.save();
      res.status(200).json(nuevoMovimiento);
    } else {
      console.log("Materia prima no encontrada");
    }

  } catch (error) {
    console.error(error);
  }
}

// Restar stock a materia prima
exports.subtractStockMateriaPrima = async (req, res) => {
  try {
    // Crear el movimiento
    const nuevoMovimiento = new MovimientoMateriaPrima({
      type: 'egreso',
      qty: Number(req.query.qty),
      material: req.params._id,
      date: Date.now(),
    });

    await nuevoMovimiento.save();

    // Actualizar el stock de la materia prima
    const materiaPrima = await MateriaPrima.findById(req.params._id);

    if (materiaPrima) {
      materiaPrima.stock -= Number(req.query.qty);
      await materiaPrima.save();
      res.status(200).json(nuevoMovimiento);
    } else {
      console.log("Materia prima no encontrada");
    }

  } catch (error) {
    console.error(error);
  }
}

