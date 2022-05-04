export {}
import mongoose from "mongoose";

const connection = {};
const connect = async () => {
    const url = await process.env.DATABASE_URL;
    const db = await mongoose.connect(url);
    return db;
};

export default connect;