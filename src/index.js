const Student = require("./src/gradebook/gradebook");

const student = new Student("Shaheer", 101);

student.addScore(85);
student.addScore(90);
student.addScore(78);

console.log("=== GradeBook ===");
console.log("Student Name:", student.name);
console.log("Roll Number:", student.rollNo);
console.log("Scores:", student.scores);
console.log("Average:", student.average());