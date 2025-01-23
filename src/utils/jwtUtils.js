import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "123455";

export const generateToken = (user) => {
  return jwt.sign(
    {
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
};
