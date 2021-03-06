var ObjectID = require('mongodb').ObjectID;

//Função que cria um item - ESTÁ FUNCIONANDO!!
exports.criarpost = function (req, res) {
  var username = req.params.usuario
  var post = req.body
  post.username = username

  req.db.collection('post').save(post, function(err, result) {
      if (err) {
          return res.sendStatus(503);
      }
      res.sendStatus(201);
    });
  };

//Função que realiza uma listagem geral de itens - ESTÁ FUNCIONANDO!!
exports.listar = function (req, res) {
  req.db.collection('post').find().toArray(function(err, result) {
      if (err) {
          return res.sendStatus(503);
      };

      res.send(result);
  });
};

//Função que realiza uma listagem filtrada de itens - ESTÁ FUNCIONANDO!!
exports.filtrar = function (req, res) {
  var busca = req.params.query

  req.db.collection('post').find({title: busca}).toArray(function(err, result) {
      if (err) {
          return res.sendStatus(503);
      };

      res.send(result);
  });
};


//Função que realiza uma listagem filtrada de itens por usuário - ESTÁ FUNCIONANDO!!
exports.filtraremusuario = function (req, res) {
  var usuario = req.params.usuario

  req.db.collection('post').find({username: usuario}).toArray(function(err, result) {
      if (err) {
          return res.sendStatus(503);
      };

      res.send(result);
  });
};

/*Função que edita um item do usuario que está logado [DUVIDA]
exports.editar = function (req, res) {
  var usuario = {
    username: [ ],
    password: [ ],
  };

  req.db.collection('usuario').find(usuario, function(err, result) {

    if (err || result == false) {
      return res.sendStatus(401);
      }
  });
*/
