import { ApolloServer, gql } from 'apollo-server-micro'
import { connect as ConnectDatabase } from './database'
import { dataSources } from './datasources'
import { typeDef as MentorusSchema, resolvers as MentorusResolvers } from './mentorus'

const typeDefs = [MentorusSchema]

const resolvers = {
  Query: {
    ...MentorusResolvers.Query
  },

  Mutation: {
    ...MentorusResolvers.Mutation
  },
}

ConnectDatabase(process.env)

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' })
