import _ from "lodash";
import {
  getAllStudent,
  getAllStudentByClassId,
  createStudent,
  updateStudent,
  deleteStudent,
  findStudentExist,
} from "../service/student";

export default {
  Query: {
    getAllStudent: async (parent: any, args: any) => {
      const listStudent = await getAllStudent();

      return {
        code: 200,
        message: "Get all Student successful",
        data: listStudent,
      };
    },

    getAllStudentByClassId: async (parent: any, args: any) => {
      const { data } = args;
      const listStudent = await getAllStudentByClassId(data);

      return {
        code: 200,
        message: `Get all Student by id ${data}`,
        data: listStudent,
      };
    },
  },

  Mutation: {
    createStudent: async (parent: any, args: any) => {
      const { data } = args;

      const checkIdStudentExist = await findStudentExist(data.id);

      if (checkIdStudentExist) {
        return {
          code: 400,
          message: "Create Student duplicate",
          data: [data],
        };
      } else {
        await createStudent(data);

        return {
          code: 200,
          message: "Create Student successful",
          data: [data],
        };
      }
    },

    updateStudent: async (parent: any, args: any) => {
      const { data } = args;
      const checkIdStudentExist = await findStudentExist(data.id);

      // check student duplicate
      if (checkIdStudentExist) {
        await updateStudent(data);

        return {
          code: 200,
          message: "Update Student successful",
          data: [data],
        };
      } else {
        return {
          code: 400,
          message: "Update Student failed",
          data: null,
        };
      }
    },

    deleteStudent: async (parent: any, args: any) => {
      const { idDelete } = args;
      await deleteStudent(idDelete);

      return {
        code: 200,
        message: "Delete Student successful",
      };
    },
  },
};
