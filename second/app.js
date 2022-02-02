const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const PORT = 6500

const app = express()
const corsConfig = {
  credentials: true
}

app.use(morgan('dev'))
app.use(cors(corsConfig))

app.get('/api/goods', (req, res) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:4000')

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
