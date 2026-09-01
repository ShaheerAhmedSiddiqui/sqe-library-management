const { Student, GradeBook } = require("./gradebook/gradebook");
// Create GradeBook
const gradeBook = new GradeBook();

// Create a student
const student = new Student("Shaheer", 101);

// Add scores
student.addScore(85);
student.addScore(90);
student.addScore(78);

// Add student to GradeBook
gradeBook.addStudent(student);

// Display information
console.log("=== GradeBook ===");
console.log("Student Name:", student.name);
console.log("Roll Number:", student.rollNo);
console.log("Scores:", student.scores);
console.log("Average:", student.average());
console.log("Grade:", student.gradeLetter());

// Test case-insensitive name search
const foundStudent = gradeBook.findStudentByName("shaheer");

console.log("\n=== Student Search ===");

if (foundStudent) {
    console.log("Student Found:", foundStudent.name);
    console.log("Roll Number:", foundStudent.rollNo);
} else {
    console.log("Student not found");
}