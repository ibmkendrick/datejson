var moment = require('moment');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var now = moment();

  res.send({time: now.format('hh:mm:ss A'), milliseconds_since_epoch: now.valueOf(), date: now.format('MM-DD-YYYY')});
});

var port = process.env.VCAP_APP_PORT || 3000;
app.listen(port, function() {
  console.log('App listening on port ' + port);
});
