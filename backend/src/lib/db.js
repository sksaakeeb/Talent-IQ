import mongoose from "mongoose";

import { ENV } from "./env.js";

export const connectDb = async () => {
  try {
    await mongoose.connect(ENV.DB_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.err("Error connecting to DB", error);
    process.exit(1);
  }
};
