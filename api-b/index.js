const express = require('express')
const app = express()
const PORT = 3001

const weatherData = require('./data/mockWeather')

app.get('/weather/:city', (req, res) => {
  const city = req.params.city.toLowerCase()
  const data = weatherData[city]

  if (data) {
    res.json({ city: data.city, temp: data.temp, unit: 'Celsius' })
  } else {
    res.status(404).json({ error: 'Cidade não encontrada' })
  }
})

app.listen(PORT, () => {
  console.log(`API B (Clima) rodando na porta ${PORT}`)
})
