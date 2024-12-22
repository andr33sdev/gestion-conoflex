const express = require("express");
const router = express.Router();

const materiaPrimaRoutes = require("./materiaPrimaRoutes");
const movimientoMateriaPrimaRoutes = require("./movimientoMateriaPrimaRoutes");

// Usa el enrutador de materia prima
router.use("/api/materia-prima", materiaPrimaRoutes);

// Usa el enrutador de materia prima
router.use("/api/movimientos-mp", movimientoMateriaPrimaRoutes);

module.exports = router;