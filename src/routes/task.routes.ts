import {
    addTask,
    deleteTask,
    getTasks,
    updateTask,
} from "@/controllers/task.controller";
import { Router } from "express";

const taskRouter: Router = Router();

taskRouter.post("/tasks", addTask);

taskRouter.get("/tasks", getTasks);

taskRouter.delete("/task/:id", deleteTask);

taskRouter.put("/task/:id", updateTask);

export default taskRouter;
