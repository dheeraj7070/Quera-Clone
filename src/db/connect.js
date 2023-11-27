import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`);
        console.log(`Databse connected Host ${connectionInstance.connections[0].host}`);
    } catch (error) {
        console.log("Errr while connecting to DB ", error)
    }
}

export default connectDB;

export { connectDB };