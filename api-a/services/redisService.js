const redis = require('redis')

// Criando um cliente Redis
const client = redis.createClient({
  host: 'localhost', // Se estiver rodando localmente
  port: 6379,        // Porta padrão do Redis
})

client.on('error', (err) => {
  console.log('Erro no Redis: ', err)
})

// Função para armazenar dados no cache
function setCache(city, data) {
  client.setex(city, 3600, JSON.stringify(data)) // Armazena por 1 hora (3600 segundos)
}

// Função para obter dados do cache
function getCache(city, callback) {
  client.get(city, (err, data) => {
    if (err) {
      console.log('Erro ao acessar o cache', err)
      callback(null)
    } else {
      callback(data ? JSON.parse(data) : null)
    }
  })
}

module.exports = { setCache, getCache }
