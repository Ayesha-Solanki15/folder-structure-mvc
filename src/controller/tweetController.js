import {
  createTweet as createTweetService,
  getTweets as getTweetsService,
} from "../services/tweetService";

export const getTweets = async (req, res) => {
  try {
    const response = await getTweetsService();
    return res.status(200).json({
      success: true,
      message: "Tweets retrieved successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve tweets",
    });
  }
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
