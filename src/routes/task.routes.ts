import { addTask, getTasks } from "@/controllers/task.controller";
import { Router } from "express";

const taskRouter: Router = Router();

taskRouter.post("/tasks", addTask);

taskRouter.get("/tasks", getTasks);

export default taskRouter;
