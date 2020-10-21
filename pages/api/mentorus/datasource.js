import Mentore from './model'

export async function loader(query) {
  return Mentore.find(query)
}

export async function create(data) {
  const mentore = await Mentore.create(data)
  return { mentore }
}
