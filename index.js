var express = require('express');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');
dd
var usuarioController = require('./controllers/usuarios.js');
var postController = require('./controllers/posts.js');

// inicializa o express
var app = express();

// inicializa o body parser
app.use(bodyParser.json());

// inicializa mongo e expoe para o express
app.use(expressMongoDb('mongodb://localhost:27017/colorin'));

// fdfdfdfdfdfdfdfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// dsfdfdfddfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

 // inicializa o servidor na porta especificada
app.listen(3000, function() {
  console.log('Acesse o servidor http://localhost:3000');
});

// Endpoints usuario generico - no usuarios.js
app.post('/registerp1', usuarioController.criarusuario); //ESTÁ FUNCIONANDO!!
app.post('/login', usuarioController.validar); //PRECISA DE AJUSTE!!

// Endpoints usuario especifico - no usuarios.js
app.get('/profile/:usuario/list', usuarioController.listarespecifico); //ESTÁ FUNCIONANDO!!
app.put('/profile/:usuario/edit', usuarioController.editar); //PRECISA DE AJUSTE!!

// Endpoints post generico
app.post('/profile/:usuario/newpost', postController.criarpost); //ESTÁ FUNCIONANDO!!
app.get('/home', postController.listar); //ESTÁ FUNCIONANDO!!
app.get('/search/:query', postController.filtrar); //ESTÁ FUNCIONANDO!!
app.get('/profile/:usuario', postController.filtraremusuario); //ESTÁ FUNCIONANDO!!

// Endpoints post especifico
//app.put('/item/:id', postController.editar);// [DÚVIDA]
