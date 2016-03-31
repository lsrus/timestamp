express = require('express');
port =  (process.env.PORT|| 8080);

var app = express()
app.use('/:date', function(req, res){
  res.send(req.params.date);
})
app.listen(port)

