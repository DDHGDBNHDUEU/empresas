const mongoose = require('mongoose');
const empleadoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  cargo: String,
  email: { type: String, required: true },
  empresa_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa', required: true }
});

module.exports = mongoose.model('Empleado', empleadoSchema);
