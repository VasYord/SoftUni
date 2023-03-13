function examPreparation(input) {
    let poorGradesTarget = (Number(input[0]));

    let problemIndex = 1;
    let currentGradeIndex = 2;
    let lastProblem = "";
    let poorResult = false;
    let problemsSum = 0;
    let gradesSum = 0;
    let poorGrades = 0;

    while ((input[problemIndex]) != "Enough") {
        if ((input[currentGradeIndex]) <= 4) {
            poorGrades++;
            if (poorGrades === poorGradesTarget) {
                poorResult = true;
                break;
            }
        }
        problemsSum++;
        gradesSum += Number(input[currentGradeIndex]);
        lastProblem = (input[problemIndex]);
        problemIndex += 2;
        currentGradeIndex += 2;
    }
    if (poorResult) {
        console.log(`You need a break, ${poorGrades} poor grades.`);
    }
    else {
        let averageScore = gradesSum / problemsSum;
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemsSum}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "SpringTime",
    "5",
    "Bus",
    "6",
    "Enough"])
