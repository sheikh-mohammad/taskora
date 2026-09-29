import mongoose from "mongoose";

const connectDB = (URI) => {
  try {
    mongoose
      .connect(URI)
      .then((result) => {
        console.log("MongoDB Connected");
      })
      .catch((err) => {
        throw Error(err);
      });
  } catch (error) {
    console.log("Error in MongoDB Connection", error);
  }
};

export default connectDB;
