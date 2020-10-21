import mongoose from 'mongoose'

export async function connect({ DB_URL }) {
  if (!DB_URL) {
    throw new Error('Ocorreu um problema ao tentar se conectar no banco de dados.')
  }

  return mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
}

export const { connection } = mongoose
