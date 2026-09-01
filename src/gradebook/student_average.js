const Student = require("./src/gradebook/gradebook");

const student = new Student("Ali", 101);

student.addScore(80);
student.addScore(90);
student.addScore(70);

console.log("Student:", student.name);
console.log("Roll No:", student.rollNo);
console.log("Scores:", student.scores);
console.log("Average:", student.average());