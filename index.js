var express = require('express')
var app = express()
var port = 3000
var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')

var adapter = new FileSync('db.json')
db = low(adapter)

db.defaults({ users: [] })
  .write();

app.set('view engine', 'pug')
app.set('views', './views')

app.listen(port, function(){
	console.log('Server listeninng on port ' + port)
})

app.get('/', function(req, res){
	res.render('index', {
		users: db.get('users').value()
	})
})

