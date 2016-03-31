express = require('express');
port =  (process.env.PORT|| 8080);

var app = express()
app.get('.', function(req, res){
  res.send(req.path);
})
app.listen(port)

