import express from "express";
import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";

import apiRouter from "./routes/apiRoutes.js";
import connectToDB from "./config/dbConfig.js";

const app = express();

app.set("view engine", "ejs");

app.set("views", import.meta.dirname + "/views");

console.log(import.meta.dirname);

app.use(morgan("combined"));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());
//use function is used to call middlewares
// It can also be used to call route function
// app.use("/tweets", tweetRouter); // if the req url looks like  localhost:3000/tweets, then tweetRouter will be called and whatever comes after /tweets will be handled by tweetRouter

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.end("<h1>Hello World</h1>");
});

app.all("*", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToDB();
});

//upto 22.40
