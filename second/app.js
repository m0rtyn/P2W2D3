const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const PORT = 6500

const app = express()

app.use(morgan('dev'))
// app.use(cors({
//   origin: ['http://localhost:6600', 'http://localhost:6500'],
//   credentials: true
// }))

app.get('/api/goods', (req, res) => {
  res.json([
    '🍰 пирожные',
    '🍦 морожные',
    '🌯 прочая еда',
    '🇰🇿 казахстан'
  ])
})

app.listen(PORT, () => {
  console.log('The server has been started on', PORT)
})
