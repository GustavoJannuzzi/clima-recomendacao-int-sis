const express = require('express')
const app = express()
const PORT = 3000

const recommendationController = require('./controllers/recommendationController')

app.get('/recommendation/:city', recommendationController.getRecommendation)

app.listen(PORT, () => {
  console.log(`API A (Recomendação) rodando na porta ${PORT}`)
})
