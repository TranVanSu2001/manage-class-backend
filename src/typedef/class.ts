import gql from "graphql-tag";

const classTypeDef = gql`
  type Class {
    id: String
    name: String
    numberOfStudent: Int
  }

  type ClassId {
    id: String
  }

  input ClassInput {
    id: String
    name: String
    numberOfStudent: Int
  }

  input ClassDeleteInput {
    idDelete: String
  }

  type ClassResponse {
    code: Int
    message: String
    data: [Class]
  }

  type ClassIdResponse {
    code: Int
    message: String
    data: [ClassId]
  }

  extend type Query {
    getAllClass: ClassResponse
    getIdClass: ClassIdResponse
  }

  extend type Mutation {
    createClass(data: ClassInput!): ClassResponse
    updateClass(data: ClassInput): ClassResponse
    deleteClass(idDelete: ClassDeleteInput!): ClassResponse
  }
`;

export default classTypeDef;
