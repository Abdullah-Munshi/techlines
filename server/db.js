import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connect = mongoose.connect(process.env.DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected : ${connect.connection.host}`);
  } catch (error) {}
};

export default connectToDatabase;
