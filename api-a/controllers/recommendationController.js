const { getWeather } = require('../services/weatherService')
const { setCache, getCache } = require('../services/redisService')

async function getRecommendation(req, res) {
  const city = req.params.city.toLowerCase()

  // Verifica se a cidade já está no cache
  getCache(city, async (cachedData) => {
    if (cachedData) {
      // Se houver no cache, retorna os dados do cache
      console.log('Cache encontrado para:', city)
      return res.json(cachedData)
    }

    // Se não houver no cache, chama a API B
    const data = await getWeather(city)

    if (!data) {
      return res.status(404).json({ error: 'Cidade não encontrada na API B' })
    }

    // Calcula a recomendação com base na temperatura
    let message
    if (data.temp > 30) {
      message = 'Está muito quente! Use protetor solar e mantenha-se hidratado.'
    } else if (data.temp > 15) {
      message = 'O clima está agradável hoje!'
    } else {
      message = 'Está frio! Não esqueça seu casaco.'
    }

    const recommendation = {
      city: data.city,
      temperature: `${data.temp} ${data.unit}`,
      recommendation: message,
    }

    // Armazena no cache
    setCache(city, recommendation)

    // Retorna a recomendação
    res.json(recommendation)
  })
}

module.exports = { getRecommendation }
