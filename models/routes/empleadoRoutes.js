const express = require('express');
const Empleado = require('./models/Empleado');
const router = express.Router();

// Crear un empleado
router.post('/empleados', async (req, res) => {
  try {
    const { nombre, cargo, email, empresa_id } = req.body;
    const empleado = new Empleado({ nombre, cargo, email, empresa_id });
    await empleado.save();
    res.status(201).json(empleado);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el empleado' });
  }
});

// Obtener todos los empleados
router.get('/empleados', async (req, res) => {
  try {
    const empleados = await Empleado.find().populate('empresa_id');
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los empleados' });
  }
});

// Actualizar un empleado
router.put('/empleados/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
});

// Eliminar un empleado
router.delete('/empleados/:id', async (req, res) => {
  try {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el empleado' });
  }
});

module.exports = router;
