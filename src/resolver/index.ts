import _ from "lodash";
import userResolver from "./user";
import subjectResolver from "./subject";
import studentResovler from "./student";
import classResolver from "./class";

const rootResolver = _.merge([
  userResolver,
  subjectResolver,
  studentResovler,
  classResolver,
]);

export default rootResolver;
