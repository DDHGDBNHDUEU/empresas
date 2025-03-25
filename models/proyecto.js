const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  fecha_inicio: { type: Date, required: true },
  empresa_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa', required: true }
});

module.exports = mongoose.model('Proyecto', proyectoSchema);
