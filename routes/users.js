var express    = require('express');
var router     = express.Router();
var connection = require('../config/connection');

/* GET users listing. */
router.get('/all', function(req, res) {
    var sql = "SELECT * FROM user";
    connection.query(sql, function(err, results){
      res.end(JSON.stringify(results))
    });
  ;
});


//detail 
router.get('/detail/:id', function(req, res){
    var id = req.params.id;
    var sql = "SELECT * FROM user WHERE id = '"+id+"' ";
    connection.query(sql, function(err, results){
      res.end(JSON.stringify(results))
    });
});


//inset 
router.post('/insert', function(req, res){
  var name = req.body.name;
  var username = req.body.username;
  var password = req.body.password;

  var sql = "INSERT INTO user (name, username, password) VALUES('"+name+"', '"+username+"', '"+password+"')";
  connection.query(sql, function(err, results){
    if(err) throw err
    res.end("Suksess Input");
  });
});


//update 
router.put('/update', function(req, res){
  var id       = req.body.id; //req.body or req.param
  var name     = req.body.name;
  var username = req.body.username;
  var password = req.body.password;

  var sql = "UPDATE user SET name='"+name+"', username='"+username+"', password='"+password+"' WHERE id='"+id+"' ";
  connection.query(sql, function(err, results){
    if(err) throw err
    res.end("Suksess Update");
  });
});
//end

//delete 
router.delete('/delete/:id', function(req, res){
  var id = req.params.id;
  var sql = "DELETE FROM user WHERE id = '"+id+"' ";
  connection.query(sql, function(err, results){
    if(err) throw err
    res.end("Suksess hapus");
  });
});


module.exports = router;
