const path = require('path')
const express = require('express')

let app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use('/assets', express.static('dist'))

app.get('/', function(req, res) {
  res.render('index', { title: 'Home' })
})

app.listen(3000)

