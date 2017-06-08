var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var indexRoute = require('./routes/index');
var despedirRoute = require('./routes/despedir');

//CONFIGURACION DE LA VISTA
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//CONFIGURACION DE LAS PETICIONES PARA JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//SE CONFIGURA LA RUTA
app.use('/', indexRoute);
app.use('/', despedirRoute);


//INICIAR EL SERVIDOR
app.listen(3000, function() {
  console.log("La aplicacion esta corriendo en el puerto: " + 3000);
});
