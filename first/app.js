const path = require('path')
const express = require('express')
const morgan = require('morgan')
const PORT = 4000

const app = express()

app.set('view engine', 'hbs')

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log('The server has been started on', PORT)
})
