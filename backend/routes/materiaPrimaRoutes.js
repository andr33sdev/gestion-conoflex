const express = require("express");
const router = express.Router();
const materiaPrimaController = require("../controllers/materiaPrimaController");

router.get("/", materiaPrimaController.getAllMateriasPrimas);
router.get("/:_id", materiaPrimaController.getMateriaPrimaById);
router.post("/", materiaPrimaController.createMateriaPrima);

module.exports = router;
