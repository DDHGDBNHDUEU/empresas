const express = require('express');
const Proyecto = require('./models/proyecto');
const router = express.Router();

// Crear un proyecto
router.post('/proyectos', async (req, res) => {
  try {
    const { nombre, descripcion, fecha_inicio, empresa_id } = req.body;
    const proyecto = new Proyecto({ nombre, descripcion, fecha_inicio, empresa_id });
    await proyecto.save();
    res.status(201).json(proyecto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el proyecto' });
  }
});

// Obtener todos los proyectos
router.get('/proyectos', async (req, res) => {
  try {
    const proyectos = await Proyecto.find().populate('empresa_id');
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los proyectos' });
  }
});

// Actualizar un proyecto
router.put('/proyectos/:id', async (req, res) => {
  try {
    const proyecto = await Proyecto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(proyecto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el proyecto' });
  }
});

// Eliminar un proyecto
router.delete('/proyectos/:id', async (req, res) => {
  try {
    await Proyecto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Proyecto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el proyecto' });
  }
});

module.exports = router;
