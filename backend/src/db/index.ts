import { connect } from "mongoose";

const createConn = async () => {
  try {
    // const secret = getDbSecret();
    const mongoURI: string = process.env.MONGO_URI
    await connect(mongoURI, {
      autoCreate: false,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB Connected...");
  } catch (err: any) {
    console.error('Error while connection to mongoDB ==>', err.message);
    // Exit process with failure
    process.exit(1);
  }
}

export default createConn;