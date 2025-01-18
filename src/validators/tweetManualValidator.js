export const createTweetManualValidator = (req, res, next) => {
  return res.status(400).json({
    message: "Please provide tweet text",
  });
};
