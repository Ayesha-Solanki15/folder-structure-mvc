import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    trim: true,
    maxlength: 280,
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema); // model in mongoose is a collection, so Tweet is a collection.

export default Tweet;
