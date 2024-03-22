import Task from "@/models/task.model";
import { Response, Request } from "express";
import { ObjectId } from "mongoose";

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


const deleteTask=async (req:Request,res:Response)=>{
try {
    const {id}=req.params

    const result=Task.findByIdAndDelete(id)

    if(result!==null){
        res.status(200).json({
            message:"Task deleted",
            success:true
        })
    }
} catch (error) {
    console.log("error during delete task", error);
        res.status(500).json({
            message: "error during delete task",
            success: false,
        });
    }
}
}

export { addTask, getTasks };
