const path = require('path')
const express = require('express')

let app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', function(req, res) {
  res.render('index')
})

app.listen(3000)

