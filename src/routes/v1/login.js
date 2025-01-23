import express from "express";
import { signInUser, signUpUser } from "../../controllers/loginController.js";
import { authenticateToken } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signUpUser);

router.post("/signin", authenticateToken, signInUser);

export default router;
