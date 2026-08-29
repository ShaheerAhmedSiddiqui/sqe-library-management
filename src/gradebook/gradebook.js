class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.studentId = rollNo;
        this.scores = [];
    }

    addScore(){
        if(this.scores < 0){
            return "Negative number cannot be accepted"
        }
    }
}

module.exports = Student;