const express = require("express");
const router = express.Router();
const materiaPrimaController = require("../controllers/materiaPrimaController");

router.get("/", materiaPrimaController.getAllMateriasPrimas);

module.exports = router;
