import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb://zafarshabhai03:zafar3303@ac-tknwthz-shard-00-00.yldeses.mongodb.net:27017,ac-tknwthz-shard-00-01.yldeses.mongodb.net:27017,ac-tknwthz-shard-00-02.yldeses.mongodb.net:27017/?ssl=true&replicaSet=atlas-11l9wk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=File-sharing`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;