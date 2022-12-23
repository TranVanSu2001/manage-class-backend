import gql from "graphql-tag";

const userTypeDef = gql`
  type User {
    _id: ID
    username: String
    email: String
    age: Int
  }

  input UserInput {
    _id: ID
    username: String
    email: String
    age: Int
  }

  type PaginationUserResponse {
    code: Int
    message: String
    data: [User]
    totalData: Int
    totalPage: Int
    page: Int
    perPage: Int
  }

  type UserResponse {
    code: Int
    message: String
    data: User
  }

  extend type Query {
    getAllUser: PaginationUserResponse
    getUserById(_id: Int!): UserResponse
  }

  extend type Mutation {
    createUser(data: UserInput!): UserResponse
    deleteUser(_id: Int!): UserResponse
    updateUser(_id: Int!, data: UserInput!): UserResponse
  }
`;

export default userTypeDef;
