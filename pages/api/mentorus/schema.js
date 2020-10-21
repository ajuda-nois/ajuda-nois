import { gql } from 'apollo-server-micro'

export const typeDef = gql`
  type Contato {
    twitter: String
    facebook: String
    whatsapp: String
    telegram: String
    instagram: String
  }

  type Mentore {
    nome: String
    areasDeEstudo: [String]
    especialidades: [String]
    tipoDeMentoria: [String]
    contato: Contato
  }

  type Query {
    mentorus: [Mentore]
  }

  input contatoInput {
    twitter: String
    facebook: String
    whatsapp: String!
    telegram: String
    instagram: String
  }

  input createMentoreInput {
    nome: String!
    areasDeEstudo: [String!]!
    especialidades: [String!]!
    tipoDeMentoria: [String!]!
    contato: contatoInput!
  }

  type createMentorePayload {
    mentore: Mentore
  }

  type Mutation {
    createMentorus(input: createMentoreInput!): createMentorePayload
  }
`
