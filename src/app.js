const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('./routes/agendamentos');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(
  path.join(__dirname, '../public')
));

app.use('/agendamentos', routes);

module.exports = app;