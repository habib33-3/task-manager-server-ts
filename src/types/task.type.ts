import { Date, Document } from "mongoose";

interface ITask extends Document {
    title: string;
    description: string;
    deadline: Date;
    priority: "low" | "medium" | "high";
    pending: "pending" | "ongoing" | "completed";
    userEmail:string
}

export default ITask;
