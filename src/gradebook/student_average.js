const { Student } = require("./gradebook");

// Create a student
const student = new Student("Ali", 102);

// Add scores
student.addScore(80);
student.addScore(90);
student.addScore(70);

// Display student information
console.log("=== Student Average ===");
console.log("Student Name:", student.name);
console.log("Roll Number:", student.rollNo);
console.log("Scores:", student.scores);
console.log("Average:", student.average());
console.log("Grade:", student.gradeLetter());