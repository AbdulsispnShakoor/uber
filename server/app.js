import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { db_connection } from "./config/db_Connection.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Enable CORS for all requests
app.use(cors());

// Connect to the database
db_connection();
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
