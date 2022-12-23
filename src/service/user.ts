import { IUser } from "@/model/user";
import _ from "lodash";

let seedUser: IUser[] = [
  { _id: 1, username: "tranvancong", email: "cong@mgail.com" },
  { _id: 2, username: "user 2", email: "user2@mgail.com" },
  { _id: 3, username: "user 3", email: "user3@mgail.com" },
];

const getAllUser = async () => {
  return seedUser;
};

const getUserById = async (userId: number) => {
  return _.find(seedUser, { _id: userId });
};

const createUser = async (user: IUser) => {
  const newUser = { ...user };
  seedUser = [...seedUser, newUser];

  return newUser;
};

const updateUser = async (_id: number, user: IUser) => {
  const userIndex = _.findIndex(
    seedUser,
    (user: IUser) => Number(user?._id) === Number(_id)
  );
  const oldUser = _.find(
    seedUser,
    (user: IUser) => Number(user?._id) === Number(_id)
  );

  seedUser.splice(userIndex, 1, { ...oldUser, ...user });

  return seedUser;
};

const deleteUser = async (userId: number) => {
  seedUser = _.filter(
    seedUser,
    (user: IUser) => Number(user?._id) !== Number(userId)
  );

  return seedUser;
};

export { createUser, getUserById, getAllUser, deleteUser, updateUser };
