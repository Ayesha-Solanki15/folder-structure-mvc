import { Filter } from "bad-words";
import {
  createTweet as createTweetRepo,
  getTweets as getTweetsRepo,
} from "../repositories/tweetRepository.js";

export const createTweet = async ({ body }) => {
  // try to find blocked words in the tweet body and if any exists don't create the tweet and retuen an error message

  const filter = new Filter();
  if (filter.isProfane(body)) {
    console.log(body);
    console.log(filter.clean(body));
    throw new Error("Tweet contains bad words");
  }

  const tweet = await createTweetRepo({ body });
  return tweet;
};

export const getTweets = async () => {
  const tweets = await getTweetsRepo();
  return tweets;
};
