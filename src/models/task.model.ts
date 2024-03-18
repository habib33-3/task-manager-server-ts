import ITask from "@/types/task.type";
import { Schema, model } from "mongoose";

const TaskSchema: Schema<ITask> = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        deadline: {
            type: Date,
            required: true,
        },
        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            required: true,
        },
        pending: {
            type: String,
            enum: ["pending", "ongoing", "completed"],
            default: "pending",
        },
        userEmail: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Task = model<ITask>("tasks", TaskSchema);

export default Task;
