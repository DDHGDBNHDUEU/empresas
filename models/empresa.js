const mongoose = require('mongoose');
const empresaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  sector: { type: String, required: true },
  direccion: String,
  telefono: String
});

module.exports = mongoose.model('Empresa', empresaSchema);
