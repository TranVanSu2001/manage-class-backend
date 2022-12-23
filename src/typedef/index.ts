import _ from "lodash";
import gql from "graphql-tag";
import userTypeDef from "./user";
import subjectTypeDef from "./subject";
import studentTypeDef from "./student";
import classTypeDef from "./class";

const initialTypeDef = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

const rootTypeDef = [
  initialTypeDef,
  userTypeDef,
  subjectTypeDef,
  studentTypeDef,
  classTypeDef,
];

export default rootTypeDef;
