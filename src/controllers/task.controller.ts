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

const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = Task.find();

        res.status(200).json({
            message: "Task loaded",
            success: true,
            tasks,
        });
    } catch (error) {
        console.log("error during get task", error);
        res.status(500).json({
            message: "error during get task",
            success: false,
        });
    }
};

const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = await Task.findByIdAndDelete(id);

        if (result) {
            res.status(200).json({
                message: "Task deleted",
                success: true,
            });
        } else {
            res.status(404).json({
                message: "Task not found",
                success: false,
            });
        }
    } catch (error) {
        console.error("Error during delete task", error);
        res.status(500).json({
            message: "Error during delete task",
            success: false,
        });
    }
};

const updateTask = async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id;
        const updates = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            { $set: updates },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({
            message: "Task deleted",
            success: true,
        });
    } catch (error) {
        console.error("Error during delete task", error);
        res.status(500).json({
            message: "Error during delete task",
            success: false,
        });
    }
};
export { addTask, getTasks, updateTask, deleteTask };
