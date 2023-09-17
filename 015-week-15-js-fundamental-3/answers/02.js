// Define an object representing a student's information

const student = {
  name: "John",
  age: 18,
  grade: "A",
};

// Method to update the student's grade
function updateGrade(newGrade) {
  student.grade = newGrade;
}

updateGrade("B");
console.log(student);
