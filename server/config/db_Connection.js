import mongoose from "mongoose";

// Connect to MongoDB
export const db_connection = async () => {
  try {
    await mongoose.connect(process.env.database_url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
