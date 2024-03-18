import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import "dotenv/config";

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "server running" });
});

export default app;
