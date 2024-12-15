const mongoose = require("mongoose");

const materiaPrimaSchema = new mongoose.Schema({
  code: { type: String, required: true },
  stock: { type: Number, required: true },
  min_stock: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("MateriaPrima", materiaPrimaSchema);