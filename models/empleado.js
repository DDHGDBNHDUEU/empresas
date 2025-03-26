// models/Empleado.js
const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  cargo: { type: String, required: true },
  empresa: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa' },
});

const Empleado = mongoose.model('Empleado', empleadoSchema);
module.exports = Empleado;
