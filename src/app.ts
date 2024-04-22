import express, { json } from "express";
import { courseRouter } from "./routes/course.routes";

export const app = express();

app.use(json());

app.use("/courses", courseRouter);