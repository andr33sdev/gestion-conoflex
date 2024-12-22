const express = require("express");
const router = express.Router();
const movimientoMateriaPrimaController = require("../controllers/movimientoMateriaPrimaController");

router.get("/", movimientoMateriaPrimaController.getAllMovimientosMateriaPrima);

module.exports = router;