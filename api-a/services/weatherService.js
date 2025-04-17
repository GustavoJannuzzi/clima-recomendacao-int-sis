const axios = require('axios')

async function getWeather(city) {
  try {
    const response = await axios.get(`http://localhost:3001/weather/${city}`)
    return response.data
  } catch (error) {
    return null
  }
}

module.exports = { getWeather }
