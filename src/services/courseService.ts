import { courseDatabase, generateId } from "../database/database";
import {
   ICourse,
   TCreateCourseData,
   TUpdateCourseData,
} from "../interfaces/course.interface";

export class CourseService {
   create(data: TCreateCourseData) {
      const now = new Date();

      const newCourse: ICourse = {
         id: generateId(),
         ...data,
         createdAt: now,
      };

      courseDatabase.push(newCourse);

      return newCourse;
   }

   getMany(search?: string) {
      const filteredCourseList = courseDatabase.filter((course) =>
         search ? course.title.toLowerCase().includes(search.toLowerCase()) : true
      );

      return filteredCourseList;
   }

   getOne(id: number) {
      const course = courseDatabase.find((course) => course.id === id);

      if (!course) {
         throw new Error("Course not found.");
      }

      return course;
   }

   update(id: number, data: TUpdateCourseData) {
      const currentCourse = courseDatabase.find((course) => course.id === id);

      if (!currentCourse) {
         throw new Error("Course not found.");
      }

      const now = new Date();

      const updateCourse: ICourse = { ...currentCourse, ...data, updatedAt: now };

      const index = courseDatabase.findIndex((course) => course.id === id);

      courseDatabase.splice(index, 1, updateCourse);

      return updateCourse;
   }

   delete(id: number) {
      const index = courseDatabase.findIndex((course) => course.id === id);

      if (index === -1) {
         throw new Error("Course not found.");
      }

      courseDatabase.splice(index, 1);

      return { message: "Course successfully deleted."};
   }
}