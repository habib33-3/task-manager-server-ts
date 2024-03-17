import express, { Request, Response } from "express";

const app = express();

const port = 5000;

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "server running" });
});

app.listen(port, () => {
    console.log(`server started at ${port}`);
});
