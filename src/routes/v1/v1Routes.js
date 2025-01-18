import express from "express";
import tweetRouter from "./tweet.js";
import commentRouter from "./comments.js";

const router = express.Router();

router.use("/tweets", tweetRouter);
// if the remaining req url starts with /tweets, use the tweetRouter
router.use("/comments", commentRouter);

export default router;
