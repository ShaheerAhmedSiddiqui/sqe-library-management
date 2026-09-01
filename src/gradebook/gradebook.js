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

        if (score < 0) {
            throw new RangeError("Score cannot be negative");
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
}

module.exports = Student;