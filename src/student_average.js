class Student {
    constructor(name) {
        this.name = name;
        this.scores = [];
    }

    // Add score
    add_score(score) {
         if (score < 0) {
            throw new Error("Score cannot be negative");
        }
        this.scores.push(score);
    }

    // 2. Calculate average
    get_average() {
        if (this.scores.length === 0) {
            return 0;
        }

        const total = this.scores.reduce((sum, score) => sum + score, 0);
        return total / this.scores.length;
    }

    
}