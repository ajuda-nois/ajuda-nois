const { Router } = require('express')
const mentorusRotas = Router()

const { Mentore } = require('./modelo')

mentorusRotas.get('/', async (req, res) => {
  const mentore = await Mentore.find({})
  res.send(mentore)
})

mentorusRotas.post('/', async (req, res) => {
  const body = req.body

  console.log(body)
  const mentore = new Mentore(body)
  await mentore.save()

  return res.send("isso ae")
})

module.exports = {
  mentorusRotas
}