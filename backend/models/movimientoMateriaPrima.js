const mongoose = require("mongoose");

const movimientoMateriaPrimaSchema = mongoose.Schema({
    type: { type: String, required: true, enum: ['ingreso', 'egreso'] },
    qty: { type: Number, required: true },
    date: { type: Date, required: true },
    material: { type: mongoose.Schema.Types.ObjectId, ref: 'materiaPrima', required: true }
});

module.exports = mongoose.model("MovimientoMateriaPrima", movimientoMateriaPrimaSchema);
