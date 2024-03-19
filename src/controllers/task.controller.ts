import Task from "@/models/task.model";
import { Response, Request } from "express";

const addTask = async (req: Request, res: Response) => {
    try {
        const task = req.body;

        const result = await Task.create(task);

        res.status(201).json({
            message: "Task added",
            success: true,
            result,
        });
    } catch (error) {
        console.log("error during add task", error);
        res.status(500).json({
            message: "error during add task",
            success: false,
        });
    }
};

export { addTask };
