import { createUser, findUserByEmail } from "../repositories/userRepository.js";
import { generateToken } from "../utils/jwtUtils.js";
import bcrypt from "bcryptjs";

export const registerUser = async ({ username, password, email }) => {
  //check if the user already exists
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw {
      message: "User already exists",
      status: 400,
    };
  }
  //create the user
  const user = createUser({ username, password, email });
  return user;
};

export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw {
      message: "Invalid email or password",
      status: 400,
    };
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw {
      message: "Invalid email or password",
      status: 400,
    };
  }
  const token = generateToken(user);
  return {
    token,
    user: {
      id: user._id,
      email: user.email,
      username: user.username,
    },
  };
};
