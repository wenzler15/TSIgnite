/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
  name: string;
  duration?: number;
  educator: string;
}

class CreateCourseService {
  execute({ duration = 16, educator, name }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
