express = require('express');
port =  (process.env.PORT|| 8080);

var app = express()
app.use('/:date', function(req, res){
  res.send(new Date(req.params.date).toDateString());
})
app.listen(port)

