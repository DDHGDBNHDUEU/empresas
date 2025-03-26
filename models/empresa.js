// models/Empresa.js
const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  rubro: { type: String, required: true },
  direccion: { type: String, required: true },
});

const Empresa = mongoose.model('Empresa', empresaSchema);
module.exports = Empresa;
