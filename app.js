const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://0.0.0.0:27017/llego_bd', {
});

const database = mongoose.connection;
database.on('error', (error) => {
  console.log('Hubo un error:', error);
});
database.once('open', () => {
  console.log('Base de datos conectada');
});

const eventos = require('./eventos');
app.use('/eventos', eventos);

app.listen(port, () => {
  console.log('Ingreso a http://localhost:3000');
});
