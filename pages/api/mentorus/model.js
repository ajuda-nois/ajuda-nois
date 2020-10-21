import mongoose, { Schema } from 'mongoose'

const MentoreSchema = Schema({
  nome: {
    require: true,
    type: String
  },
  areasDeEstudo: {
    require: true,
    type: [String]
  },
  especialidades: {
    default: [],
    type: [String]
  },
  tipoDeMentoria: {
    require: true,
    type: [String]
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

/**
 * Isso evita dar erro no mongoose quando o next recompilar
 * https://stackoverflow.com/a/61433500
 */
export default mongoose.models['Mentore'] || mongoose.model('Mentore', MentoreSchema)
