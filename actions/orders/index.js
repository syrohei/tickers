
var mongoose = require('mongoose')
var Order = require('./order.model')

exports.handler = function (event, context) {
  Order.find({}, '-_id -__v', function(err, orders){
    if(err || !orders) return context.fail(err)
    context.succeed(orders);
  })
}

