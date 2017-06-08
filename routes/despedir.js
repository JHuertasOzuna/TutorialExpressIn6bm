var express = require('express');
var app = express.Router();

app.get('/despedir', function(req, res) {
  res.render('index', {mensaje: "Orale pues"});
});
/*
-> NODE JS
-> USO DEL NPM
-> MANEJO DE EXPRESS
-> CREACION DE RUTAS
-> CREACION DE MODULOS
-> RENDERIZAR VISTAS
-> INTERACION DE VISTA Y RUTAS
-> METODOS DE HTTP
-> MANEJO DE TEMPLATE
*/

module.exports = app;
