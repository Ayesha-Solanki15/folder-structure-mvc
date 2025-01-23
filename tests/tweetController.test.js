import { getTweets } from "../src/controller/tweetController.js";
import { mockRequest, mockResponse } from "./mocker.js";
import tweetService from "../src/services/tweetService.js";

jest.mock("../src/services/tweetService.js", () => ({
  getTweets: jest.fn().mockResolvedValue([
    {
      id: 1,
      body: "Hello",
    },
    {
      id: 2,
      body: "World",
    },
  ]),
}));

test("should return tweets", async () => {
  const req = mockRequest();
  const res = mockResponse();

  const response = [
    {
      id: 1,
      body: "Hello",
    },
    {
      id: 2,
      body: "World",
    },
  ];
  // this is the expected response we want

  await getTweets(req, res);
  expect(res.json).toHaveBeenCalledWith({
    success: true,
    message: "Tweets retrieved successfully",
    data: response,
  });
});

// negative test
test("should handle error when getTweets fails", async () => {
  const req = mockRequest();
  const res = mockResponse();
  tweetService.getTweets.mockRejectedValue(
    new Error("Failed to retrieve tweets")
  );
  await getTweets(req, res);
  expect(res.status).toHaveBeenCalledWith(500);
  expect(res.json).toHaveBeenCalledWith({
    success: false,
    message: "Failed to retrieve tweets",
  });
});
