import User from "../schema/user.js";

export const createUser = async ({ username, password, email }) => {
  try {
    const user = await User.create({ username, password, email });
    return user;
  } catch (error) {
    throw error;
  }
};

export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
};
