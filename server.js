const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Conectar a MongoDB con Mongoose
mongoose.connect('mongodb+srv://may:912@cluster0.6joyu.mongodb.net/gestionEmpresas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ Conectado a MongoDB');
  })
  .catch(err => {
    console.error('❌ Error conectando a MongoDB:', err);
  });

// Definir los esquemas y modelos
const empresaSchema = new mongoose.Schema({
  nombre: String,
  rubro: String,
  direccion: String,
});

const empleadoSchema = new mongoose.Schema({
  nombre: String,
  cargo: String,
  empresa: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa' },
});

const proyectoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  empresa: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa' },
});

const Empresa = mongoose.model('Empresa', empresaSchema);
const Empleado = mongoose.model('Empleado', empleadoSchema);
const Proyecto = mongoose.model('Proyecto', proyectoSchema);

// Configuración de Express
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Para servir archivos estáticos (como index.html)

// Rutas de la API

// Obtener todas las empresas, empleados y proyectos
app.get('/api/datos', async (req, res) => {
  try {
    const empresas = await Empresa.find();
    const empleados = await Empleado.find().populate('empresa');
    const proyectos = await Proyecto.find().populate('empresa');

    res.json({
      empresas,
      empleados,
      proyectos
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los datos');
  }
});

// Crear una nueva empresa
app.post('/api/empresa', async (req, res) => {
  try {
    const nuevaEmpresa = new Empresa(req.body);
    await nuevaEmpresa.save();
    res.status(201).send('Empresa creada');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear la empresa');
  }
});

// Crear un nuevo empleado
app.post('/api/empleado', async (req, res) => {
  try {
    const nuevoEmpleado = new Empleado(req.body);
    await nuevoEmpleado.save();
    res.status(201).send('Empleado creado');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el empleado');
  }
});

// Crear un nuevo proyecto
app.post('/api/proyecto', async (req, res) => {
  try {
    const nuevoProyecto = new Proyecto(req.body);
    await nuevoProyecto.save();
    res.status(201).send('Proyecto creado');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el proyecto');
  }
});

// Ruta para servir la página HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('🚀 Servidor en puerto 3000');
});
