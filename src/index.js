import mongoose from "mongoose";
import { DB_NAME } from "./constants";

/*
// Approach one  o connect to db

import { Express } from "express";
const app = express()(
  // IIFe function
  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (error) => {
        console.log("err ", error);
        throw error;
      });

      app.listen(process.env.PORT, () => {
        console.log(`app is listening on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.log("ERROR ", error);
      throw err;
    }
  }
)();

*/
