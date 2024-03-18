import app from "@/app";
import { DB_URL } from "@/env";
import mongoose from "mongoose";

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${DB_URL}`);
        console.log(
            `\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`
        );
        app.listen(port, () => {
            console.log("Server at ", port);
        });
    } catch (error) {
        return console.log("mongodb connection failed", error);
    }
};