class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.studentId = rollNo;
        this.scores = [];
    }

    AddStudent(){
        if(this.studentId){
            return "Student with this Id already exist"
        }
    }
}

module.exports = Student;