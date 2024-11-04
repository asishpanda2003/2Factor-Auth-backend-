import { connect } from "mongoose";

const dbConnect = async () => {
  try {
    const mongoDbConnection = await connect(process.env.URI);
    console.log("Database Connected");
  } catch (error) {
    console.error(`Database Connection Failed: ${error.message}`);
    process.exit(1); // Exit process with failure code
  }
};

export default dbConnect;
