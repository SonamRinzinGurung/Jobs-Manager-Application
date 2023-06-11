import mongoose from "mongoose";

const connectToDB = (url) => {
  return mongoose.connect(url);
};

export default connectToDB;
