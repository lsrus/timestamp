express = require('express');
port =  (process.env.PORT|| 8080);

var app = express()
app.use('/:path', function(req, res){
  res.send(path);
})
app.listen(port)

