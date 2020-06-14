const mongoose = require('mongoose')
const { Schema } = mongoose

const MentoreSchema = Schema({
  nome: {
    require: true,
    type: String
  },
  areasDeEstudo: {
    require: true,
    type: [ String ]
  },
  especialidades: {
    default: [],
    type: [ String ]
  },
  tipoDeMentoria: {
    require: true,
    type: [ String ]
  },
  contato: {
      twitter: String,
      facebook: String,
      whatsapp: {
        require: true,
        type: String
      },
      telegram: String,
      instagram: String
  }
})

const Mentore = mongoose.model('mentore', MentoreSchema, 'mentorus')

module.exports = {
  Mentore
}