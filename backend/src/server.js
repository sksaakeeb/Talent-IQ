import express from "express";
import path from "path";

import { ENV } from "./lib/env.js";
import { connectDb } from "./lib/db.js";

const app = express();

const __dirname = path.resolve();

if (ENV.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDb();
    app.listen(ENV.PORT, () => {
      console.log(`Server is running on PORT ${ENV.PORT}`);
    });
  } catch (error) {
    console.err("Error starting server", error);
  }
};

startServer();
