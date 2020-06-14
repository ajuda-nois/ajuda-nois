const dotEnv = require('dotenv')
dotEnv.config()

const config = {
  DB_URL: process.env.DB_URL
}

module.exports = {
  config
}
