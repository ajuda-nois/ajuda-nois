export const resolvers = {
  Query: {
    mentorus(parent, args, { dataSources }) {
      return dataSources.Mentorus.loader({ ...args })
    }
  },

  Mutation: {
    createMentorus(parent, args, { dataSources }) {
      return dataSources.Mentorus.create(args.input)
    }
  }
}
