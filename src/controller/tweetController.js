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

export const createTweet = (req, res) => {
  return res.json({
    message: "Hello from create tweet",
  });
};
