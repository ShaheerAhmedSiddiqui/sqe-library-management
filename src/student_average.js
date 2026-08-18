function calculateAverage(marks) {
    if (!marks || marks.length === 0) {
        return 0;
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

const marks = [85, 90, 78, 92, 88];

const average = calculateAverage(marks);

console.log("Average Marks:", average.toFixed(2));

document.getElementById("average").textContent = `Student Average: ${average}`;