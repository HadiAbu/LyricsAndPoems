import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Estableshed connection on: ${conn.connection.host}`);
  } catch (e) {
    console.error(`Error: %${e.message}`);
    process.exit(1);
  }
};

export default connectDB;
