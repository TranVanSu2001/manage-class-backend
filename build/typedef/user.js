"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _graphqlTag = _interopRequireDefault(require("graphql-tag"));
const userTypeDef = (0, _graphqlTag.default)`
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
var _default = userTypeDef;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ1c2VyVHlwZURlZiIsImdxbCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlZGVmL3VzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcblxuY29uc3QgdXNlclR5cGVEZWYgPSBncWxgXG4gIHR5cGUgVXNlciB7XG4gICAgX2lkOiBJRFxuICAgIHVzZXJuYW1lOiBTdHJpbmdcbiAgICBlbWFpbDogU3RyaW5nXG4gICAgYWdlOiBJbnRcbiAgfVxuXG4gIGlucHV0IFVzZXJJbnB1dCB7XG4gICAgX2lkOiBJRFxuICAgIHVzZXJuYW1lOiBTdHJpbmdcbiAgICBlbWFpbDogU3RyaW5nXG4gICAgYWdlOiBJbnRcbiAgfVxuXG4gIHR5cGUgUGFnaW5hdGlvblVzZXJSZXNwb25zZSB7XG4gICAgY29kZTogSW50XG4gICAgbWVzc2FnZTogU3RyaW5nXG4gICAgZGF0YTogW1VzZXJdXG4gICAgdG90YWxEYXRhOiBJbnRcbiAgICB0b3RhbFBhZ2U6IEludFxuICAgIHBhZ2U6IEludFxuICAgIHBlclBhZ2U6IEludFxuICB9XG5cbiAgdHlwZSBVc2VyUmVzcG9uc2Uge1xuICAgIGNvZGU6IEludFxuICAgIG1lc3NhZ2U6IFN0cmluZ1xuICAgIGRhdGE6IFVzZXJcbiAgfVxuXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcbiAgICBnZXRBbGxVc2VyOiBQYWdpbmF0aW9uVXNlclJlc3BvbnNlXG4gICAgZ2V0VXNlckJ5SWQoX2lkOiBJbnQhKTogVXNlclJlc3BvbnNlXG4gIH1cblxuICBleHRlbmQgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlVXNlcihkYXRhOiBVc2VySW5wdXQhKTogVXNlclJlc3BvbnNlXG4gICAgZGVsZXRlVXNlcihfaWQ6IEludCEpOiBVc2VyUmVzcG9uc2VcbiAgICB1cGRhdGVVc2VyKF9pZDogSW50ISwgZGF0YTogVXNlcklucHV0ISk6IFVzZXJSZXNwb25zZVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyVHlwZURlZjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsV0FBVyxHQUFHLElBQUFDLG1CQUFHLENBQUM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUMsZUFFYUQsV0FBVztBQUFBIn0=