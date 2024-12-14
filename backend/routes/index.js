const express = require("express");
const router = express.Router();

const materiaPrimaRoutes = require("./materiaPrimaRoutes");

// Usa el enrutador de materia prima
router.use("/api/materia-prima", materiaPrimaRoutes);

module.exports = router;