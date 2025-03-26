const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const empresaRoutes = require("./routes/empresaRoutes");

const app = express();
app.use(bodyParser.json());

// Configurar las rutas
app.use('/api', empresaRoutes);

// Conectar a MongoDB con Mongoose
mongoose.connect('mongodb+srv://may:912@cluster0.6joyu.mongodb.net/gestionEmpresas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(3000, () => console.log('🚀 Servidor en puerto 3000'));
  })
  .catch(err => {
    console.error('❌ Error conectando a MongoDB:', err);
  });
