import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  return router.json({
    message: "Hello from comments",
  });
  // this function is simply the controller since it is handling the request and response and has nothing to do with the validation or the business logic
});

export default router;
