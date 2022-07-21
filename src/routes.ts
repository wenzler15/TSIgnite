import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Douglas",
    duration: 10,
  });

  CreateCourseService.execute({
    name: "React",
    educator: "Douglas",
  });

  return response.send();
}
