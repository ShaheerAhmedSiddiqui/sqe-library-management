class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.scores = [];
    }

    addScore(score) {
        if (typeof score !== "number" || Number.isNaN(score)) {
            throw new TypeError("Score must be a number");
        }

        if (score < 0 || score > 100) {
            throw new RangeError("Score must be between 0 and 100");
        }

        this.scores.push(score);
    }

    average() {
        if (this.scores.length === 0) {
            return 0.0;
        }

        const total = this.scores.reduce(
            (sum, score) => sum + score,
            0
        );

        return total / this.scores.length;
    }

    gradeLetter() {
        const average = this.average();

        if (average >= 90) {
            return "A";
        }

        if (average >= 80) {
            return "B";
        }

        if (average >= 70) {
            return "C";
        }

        if (average >= 60) {
            return "D";
        }

        return "F";
    }
}


class GradeBook {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        const duplicate = this.students.some(
            existingStudent => existingStudent.rollNo === student.rollNo
        );

        if (duplicate) {
            throw new Error(
                `Student with roll number ${student.rollNo} already exists`
            );
        }

        this.students.push(student);
    }

    findStudentByName(name) {
        return this.students.find(
            student =>
                student.name.toLowerCase() === name.toLowerCase()
        );
    }
}


module.exports = {
    Student,
    GradeBook
};
