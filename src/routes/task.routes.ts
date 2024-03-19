import { addTask } from "@/controllers/task.controller";
import { Router } from "express";

const taskRouter: Router = Router();

taskRouter.post("/tasks", addTask);

export default taskRouter;
