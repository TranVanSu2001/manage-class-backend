"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _graphqlTag = _interopRequireDefault(require("graphql-tag"));
var _user = _interopRequireDefault(require("./user"));
const initialTypeDef = (0, _graphqlTag.default)`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;
const rootTypeDef = [initialTypeDef, _user.default];
var _default = rootTypeDef;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpbml0aWFsVHlwZURlZiIsImdxbCIsInJvb3RUeXBlRGVmIiwidXNlclR5cGVEZWYiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdHlwZWRlZi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHVzZXJUeXBlRGVmIGZyb20gXCIuL3VzZXJcIjtcblxuY29uc3QgaW5pdGlhbFR5cGVEZWYgPSBncWxgXG4gIHR5cGUgUXVlcnkge1xuICAgIF86IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgXzogU3RyaW5nXG4gIH1cbmA7XG5cbmNvbnN0IHJvb3RUeXBlRGVmID0gW2luaXRpYWxUeXBlRGVmLCB1c2VyVHlwZURlZl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RUeXBlRGVmO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBRyxJQUFBQyxtQkFBRyxDQUFDO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVELE1BQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFjLEVBQUVHLGFBQVcsQ0FBQztBQUFDLGVBRW5DRCxXQUFXO0FBQUEifQ==