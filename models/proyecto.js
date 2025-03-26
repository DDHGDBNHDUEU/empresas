// models/Proyecto.js
const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  empresa: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa' },
});

const Proyecto = mongoose.model('Proyecto', proyectoSchema);
module.exports = Proyecto;
