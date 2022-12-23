import gql from "graphql-tag";

const studentTypeDef = gql`
  type Student {
    id: String
    name: String
    age: Int
    email: String
    sex: String
    classID: String
  }

  input StudentInput {
    id: String
    name: String
    age: Int
    email: String
    sex: String
    classID: String
  }

  input StudentDeleteInput {
    idDelete: String
  }

  type StudentResponse {
    code: Int
    message: String
    data: [Student]
  }

  extend type Query {
    getAllStudent: StudentResponse
    getAllStudentByClassId: StudentResponse
  }

  extend type Mutation {
    createStudent(data: StudentInput!): StudentResponse
    updateStudent(data: StudentInput): StudentResponse
    deleteStudent(idDelete: StudentDeleteInput!): StudentResponse
  }
`;

export default studentTypeDef;
