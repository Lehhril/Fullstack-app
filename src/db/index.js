import mongoose from "mongoose";
import {db_name} from "../constants.js";

const db = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${db_name}`);
        console.log(`MongoDb Connected !!! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default db;