import express from "express";
import {
  getTweets,
  getTweetById,
  createTweet,
} from "../../controller/tweetController.js";
import { validate } from "../../validators/zodValidator.js";
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";
// import { createTweetManualValidator } from "../../validators/tweetManualValidator";
const router = express.Router();

router.get("/", getTweets);

router.get("/:id", getTweetById);

// router.post("/", createTweetManualValidator, createTweet);

router.post("/", validate(tweetZodSchema), createTweet);
// the validate function should return a middleware function that will be used to validate the request body, and then call the next function if the validation is successful. Eventually we pass the function here and doesn't call it.

export default router;
