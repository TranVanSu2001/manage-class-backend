import _ from "lodash";
import {
  getAllUser,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} from "@/service/user";

export default {
  Query: {
    getAllUser: async (parent: any, args: any) => {
      const listUser = await getAllUser();

      return {
        code: 200,
        message: "Get list User successful",
        data: listUser,
      };
    },

    getUserById: async (parent: any, args: any) => {
      const { _id } = args;
      const user = await getUserById(_id);

      return {
        code: 200,
        message: "Get User successful",
        data: user,
      };
    },
  },

  Mutation: {
    createUser: async (parent: any, args: any) => {
      const { data } = args;
      const createdUser = await createUser(data);

      return {
        code: 200,
        message: "Create User successful",
        data: createdUser,
      };
    },

    updateUser: async (parent: any, args: any) => {
      const { _id, data } = args;
      await updateUser(_id, data);

      return {
        code: 200,
        message: "Update User successful",
      };
    },

    deleteUser: async (parent: any, args: any) => {
      const { _id } = args;
      await deleteUser(_id);

      return {
        code: 200,
        message: "Delete User successful",
      };
    },
  },
};
