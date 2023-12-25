// require("dotenv").config({ path: "./env" });
// improve version of upper code
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();
