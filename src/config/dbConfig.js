import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectToDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}
