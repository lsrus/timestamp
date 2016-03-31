express = require('express');
port =  (process.env.PORT|| 8080);

var app = express()
app.get('/', function(req, res){
  res.send('Here');
})
app.listen(port)

