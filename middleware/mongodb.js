import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  // mongodb+srv://tariq:dGwNfuwoiRNTsQCr@cluster0.o7wcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  await mongoose.connect(
    process.env.mongodburl,
    //"mongodb+srv://tariq:YPbdRVdqIbsyyiZU@cluster0.o7wcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  );
  return handler(req, res);
};

export default connectDB;
