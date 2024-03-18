import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import "dotenv/config";
import taskRouter from "./routes/task.routes";

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "server running" });
});

app.use("/api/v1", taskRouter);

export default app;
