import { createTweet as createTweetService } from "../services/tweetService";

export const getTweets = (req, res) => {
  return res.json({
    message: "Hello from tweets",
  });
};

export const getTweetById = (req, res) => {
  return res.json({
    message: "Hello from tweet by id",
  });
};

export const createTweet = async (req, res) => {
  try {
    const tweet = await createTweetService({
      body: req.body.body,
    });
    return res.status(201).json({
      success: true,
      data: tweet,
      message: "Tweet created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
