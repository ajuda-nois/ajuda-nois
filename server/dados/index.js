const mongoose = require('mongoose')
const { config } = require('../config')

const conectar = () => (
  mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
)

module.exports = {
  conectar
}