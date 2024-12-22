const express = require("express");
const router = express.Router();
const materiaPrimaController = require("../controllers/materiaPrimaController");

router.get("/", materiaPrimaController.getAllMateriasPrimas);
router.get("/:_id", materiaPrimaController.getMateriaPrimaById);
router.post("/", materiaPrimaController.createMateriaPrima);
router.put("/add-stock/:_id", materiaPrimaController.addStockMateriaPrima);
router.put("/subtract-stock/:_id", materiaPrimaController.subtractStockMateriaPrima);

module.exports = router;
