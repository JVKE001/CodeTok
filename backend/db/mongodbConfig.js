import mongoose from "mongoose";

/**
 * Connect to MOngoDB
 * ------------------
 * Attempts to connect using the URL in process.env.MONGO_URL.
 * On success, logs the connected host.
 * On failure, logs the error and exits the process with status code 1.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb Connected: ${conn.connection.host}`.blue.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    // Exit process with failure code (1 = error)
    process.exit(1);
  }
};

export default connectDB;
