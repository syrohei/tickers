var mongoose = require('mongoose');
var host = "mongodb://admin:ticker1234@52.34.154.180:27017/ticker-api"

var db = mongoose.createConnection(host, { server: { poolSize: 20 }}, function(err){
  if (err)
    console.log(db)
  else
    console.log("succes")
})

exports.DB = db

