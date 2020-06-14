const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV
const app = next({ dev })
const handle = app.getRequestHandler()
const { conectar } = require('./dados')

const { mentorusRotas } = require('./mentorus/rotas')

app.prepare()
  .then(() => conectar())
  .then(() => {
    const server = express()

    server.use(bodyParser.json())
   
    server.use('/api/mentorus', mentorusRotas)

    server.get('*', (req, res) => (
      handle(req, res)
    ))

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Running on 3000, bebezinho!')
    })
  })