import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
