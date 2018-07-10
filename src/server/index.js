const path = require('path')
const express = require('express')
const _ = require('lodash')

const beans = require(path.join(__dirname, 'data')+"/beans.js")

let app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use('/assets', express.static('dist'))
app.use('/images', express.static('./src/client/images'))
app.use('/fonts', express.static('./src/client/fonts'))

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home',
    hero: 'hero-coffee.jpg'
  })
})

app.get('/coffee', function(req, res) {
  res.render('coffee', {
    title: 'Our Coffee',
    hero: 'greencoffee.jpg',
    beans: beans
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log('listening on', PORT)
