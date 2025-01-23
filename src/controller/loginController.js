import {
  registerUser as registerUserService,
  loginUser as loginUserService,
} from "../services/userService.js";

export const signInUser = async (req, res) => {
  try {
    const { token, user } = await loginUserService({
      email: req.body.email,
      password: req.body.password,
    });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 3600000,
    });
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to login user",
    });
  }
};

export const signUpUser = async (req, res) => {
  try {
    const response = await registerUserService(req.body);
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to register user",
    });
  }
};
