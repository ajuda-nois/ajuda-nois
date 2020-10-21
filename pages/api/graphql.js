import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Persons {
    name: String
  }

  type Query {
    persons: [Persons]
  }
`

const resolvers = {
  Query: {
    persons(parent, args, context) {
      return [{ name: 'Marcos Florencio' }]
    }
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' })
