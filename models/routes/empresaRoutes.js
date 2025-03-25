const express = require('express');
const Empresa = require('./models/empresa');
const router = express.Router();

// Crear empresa
router.post('/empresas', async (req, res) => {
  const { nombre, sector, direccion, telefono } = req.body;
  const empresa = new Empresa({ nombre, sector, direccion, telefono });
  await empresa.save();
  res.status(201).json(empresa);
});

// Obtener todas las empresas
router.get('/empresas', async (req, res) => {
  const empresas = await Empresa.find();
  res.json(empresas);
});

// Otros CRUD aquí: PUT y DELETE...

module.exports = router;
