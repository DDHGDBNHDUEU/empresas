const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const empresaRoutes = require('.routes/empresaRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api', empresaRoutes);

  mongoose.connect('mongodb+srv://may:912@cluster0.6joyu.mongodb.net/gestionEmpresas')
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(3000, () => console.log('Servidor en puerto 3000'));
  })
  .catch(err => console.error(err));