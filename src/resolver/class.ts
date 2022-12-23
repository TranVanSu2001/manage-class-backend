import _ from "lodash";
import {
  getAllClass,
  createClass,
  updateClass,
  deleteClass,
  getIdClass,
  findClassExist,
} from "../service/class";

export default {
  Query: {
    getAllClass: async (parent: any, args: any) => {
      const listClass = await getAllClass();

      return {
        code: 200,
        message: "Get all Class successful",
        data: listClass,
      };
    },

    getIdClass: async (parent: any, args: any) => {
      const listClassID = await getIdClass();

      return {
        code: 200,
        message: `Get list id Class successful`,
        data: listClassID,
      };
    },
  },

  Mutation: {
    createClass: async (parent: any, args: any) => {
      const { data } = args;

      const checkIdClassExist = await findClassExist(data.id);

      if (checkIdClassExist) {
        return {
          code: 400,
          message: "Create Class duplicate",
          data: [data],
        };
      } else {
        await createClass(data);

        return {
          code: 200,
          message: "Create Class successful",
          data: [data],
        };
      }
    },

    updateClass: async (parent: any, args: any) => {
      const { data } = args;
      const checkIdClassExist = await findClassExist(data.id);

      // check Class duplicate
      if (checkIdClassExist) {
        await updateClass(data);

        return {
          code: 200,
          message: "Update Class successful",
          data: [data],
        };
      } else {
        return {
          code: 400,
          message: "Update Class failed",
          data: null,
        };
      }
    },

    deleteClass: async (parent: any, args: any) => {
      const { idDelete } = args;
      await deleteClass(idDelete);

      return {
        code: 200,
        message: "Delete Class successful",
      };
    },
  },
};
