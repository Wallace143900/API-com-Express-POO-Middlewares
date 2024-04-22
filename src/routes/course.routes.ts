import { Router } from "express";
import { CourseController } from "../controllers/course.controller";

export const courseRouter = Router();

const courseControllers = new CourseController();

courseRouter.post("/", courseControllers.create);
courseRouter.get("/", courseControllers.getMany);
courseRouter.get("/:id", courseControllers.getOne);
courseRouter.patch("/:id", courseControllers.update);
courseRouter.delete("/:id", courseControllers.remove);