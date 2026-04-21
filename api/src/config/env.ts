import dotenv from "dotenv"; // dotenv charge les variables de .env dans process.env

dotenv.config();

export const env = {
  port: process.env.PORT || "3001",
  mongoUri: process.env.MONGO_URI || "",
};