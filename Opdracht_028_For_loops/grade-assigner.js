function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else if (score > 60) {
        return 'E';
    } else {
        return 'F';
    }
};

for (i = 60; i <= 100; i++) {
    let score = i;
    console.log("Voor", i, " punten krijg je een", assignGrade(score));
}