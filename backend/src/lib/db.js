import mongoose from "mongoose";

import { ENV } from "./env.js";

export const connectDb = async () => {
  try {
    if (!ENV.DB_URL) {
      throw new Error("DB not defined in ENV");
    }
    await mongoose.connect(ENV.DB_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB", error);
    process.exit(1);
  }
};
