var mysql  = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost' ,
    user : 'root',
    password : '',
    database : 'express_login'
});

connection.connect(function(err){
    if(err) throw err
    console.log('Connection sucess');
});

module.exports = connection;