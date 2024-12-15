const express = require("express");
const router = express.Router();
const materiaPrimaController = require("../controllers/materiaPrimaController");

router.get("/", materiaPrimaController.getAllMateriasPrimas);
router.post("/", materiaPrimaController.createMateriaPrima);

module.exports = router;
