var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp')
var model = require('./db.model')
var db = model.DB

var Ticker = new Schema({
  _id: String,
  exchange_name: {type: String, require: true},
  high: String ,
  low: String ,
  close: Schema.Types.Mixed, 
  open: Schema.Types.Mixed, 
  active: Boolean,
  time: Number 
});

Ticker.plugin(timestamps);

module.exports =  db.model('Ticker', Ticker)

