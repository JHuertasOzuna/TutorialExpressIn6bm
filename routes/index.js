var express = require('express');
var app = express.Router();

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/formulario', function(req, res) {
  res.render('formulario');
});

app.get('/saludar/:nombre', function(req, res) {
  var nombre = req.params.nombre;
  res.render('index', {nombre: nombre});
});

app.post('/saludar', function(req, res){
  var formulario = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    comentario: req.body.comentario
  }
});

module.exports = app;
