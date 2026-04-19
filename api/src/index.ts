import app from "./app.js";
import { connectDB } from "./db/connectDB.js";
import { env } from "./config/env.js";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`);
    });
  } catch (error) {
    console.error("Startup error:", error);
    process.exit(1);
  }
};

startServer();