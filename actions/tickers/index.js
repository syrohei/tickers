var Ticker  = require('./ticker.model')

exports.handler = function (event, context) {
  Ticker.find({}, '-_id -__v' ,{sort:{createdAt: -1}}, function(err,tickers){
    if(err || !tickers) return  context.fail(err);
    context.succeed(tickers);
  })
}
