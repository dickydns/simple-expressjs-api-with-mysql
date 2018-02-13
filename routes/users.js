var express    = require('express');
var router     = express.Router();
var connection = require('../config/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM user";
    connection.query(sql, function(err, results){
      res.end(JSON.stringify(results))
    });
  ;
});

module.exports = router;
