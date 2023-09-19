class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.enrolledCourses = [];
  }

  enrollInCourse(course) {
    this.enrolledCourses.push(course);
  }

  showEnrolledCourses() {
    const enrolledCourses = this.enrolledCourses.join(", ");
    return `${this.name}'s enrolled courses: ${enrolledCourses}`;
  }
}

class Admission {
  constructor() {
    this.students = [];
  }

  enrollStudent(student) {
    this.students.push(student);
  }

  assignCourse(student, course) {
    student.enrollInCourse(course);
  }

  showEnrolledStudents() {
    const enrolledStudents = this.students.map(
      (student) => `${student.name} (${student.email})`
    );
    return `Enrolled students:\n${enrolledStudents.join("\n")}`;
  }
}

const admissionOffice = new Admission();

const student1 = new Student("Mithun", "mithun@pw.live");
const student2 = new Student("Farman", "farman@pw.live");

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);

admissionOffice.assignCourse(student1, "Full Stack Web Development");
admissionOffice.assignCourse(student2, "Data Science Masters");

console.log(student1.showEnrolledCourses()); // Mithun's enrolled courses: Full Stack Web Development
console.log(student2.showEnrolledCourses()); // Farman's enrolled courses: Data Science Masters

console.log(admissionOffice.showEnrolledStudents());
