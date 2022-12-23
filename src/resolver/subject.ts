import _ from "lodash";
import {
  getAllSubject,
  createSubject,
  updateSubject,
  deleteSubject,
} from "../service/subject";

export default {
  Query: {
    getAllSubject: async (parent: any, args: any) => {
      const listSubject = await getAllSubject();

      return {
        code: 200,
        message: "Get all Subject successful",
        data: listSubject,
      };
    },
  },

  Mutation: {
    createSubject: async (parent: any, args: any) => {
      const { data } = args;
      await createSubject(data);

      return {
        code: 200,
        message: "Create Subject successful",
        data: [data],
      };
    },

    updateSubject: async (parent: any, args: any) => {
      const { data } = args;
      await updateSubject(data);

      return {
        code: 200,
        message: "Update Subject successful",
        data: [data],
      };
    },

    deleteSubject: async (parent: any, args: any) => {
      const { idDelete } = args;
      await deleteSubject(idDelete);

      return {
        code: 200,
        message: "Delete Subject successful",
      };
    },
  },
};
