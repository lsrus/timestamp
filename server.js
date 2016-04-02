express = require('express');
port =  (process.env.PORT|| 8080);

var app = express()

var months = ['January', 'February', 'March', 'April',
              'May', 'June', 'July', 'August', 'September',
              'October', 'November', 'Decemeber']

app.get('/', function(req, res){
  res.send({unix: null, natural: null})
})

app.use('/:date', function(req, res){
  var argu = parseInt(req.params.date)
  if (argu) {
    var date = new Date(argu);
  } else {
    var dateString = req.params.date.replace(',', '').split(' ')
    dateString.unshift(dateString.pop())
    var date = new Date(dateString.join(' '));
  }
  
    if (isNaN(date.getTime())){
        res.send({unix: null, natural: null})
    } else {
    var month = months[date.getMonth()]
    var dateSt = month + ' ' + date.getDate() + ', ' + date.getFullYear()
    res.send( { unix: date.getTime() / 1000, natural: dateSt})
    }
})

app.listen(port)

