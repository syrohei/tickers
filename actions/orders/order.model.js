var mongoose = require('mongoose')
var Schema = mongoose.Schema
var timestamps = require('mongoose-timestamp')
var model = require('./db.model')
var db = model.DB

var Order = new Schema({
  _id: String,
  exchange_name: {type: String, unique: true},
  asks: Schema.Types.Mixed ,
  bids: Schema.Types.Mixed,
  active: Boolean
});

Order.plugin(timestamps);

module.exports =  db.model('Order', Order)

