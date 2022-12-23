import gql from "graphql-tag";

const subjectTypeDef = gql`
  type Subject {
    id: String
    name: String
    classID: String
    startTime: String
    endTime: String
  }

  input SubjectInput {
    id: String
    name: String
    classID: String
    startTime: String
    endTime: String
  }

  input SubjectDeleteInput {
    idDelete: String
  }

  type SubjectResponse {
    code: Int
    message: String
    data: [Subject]
  }

  extend type Query {
    getAllSubject: SubjectResponse
  }

  extend type Mutation {
    createSubject(data: SubjectInput!): SubjectResponse
    updateSubject(data: SubjectInput): SubjectResponse
    deleteSubject(idDelete: SubjectDeleteInput!): SubjectResponse
  }
`;

export default subjectTypeDef;
