var express = require('express');
var app = express();
var fs = require("fs");


 app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       next();
 }) 

app.get('/listEvenements', function (req, res) {
   fs.readFile( __dirname + "/" + "evs.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})