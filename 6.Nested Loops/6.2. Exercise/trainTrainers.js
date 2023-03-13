function train(input) {
    let index = 0;
    let gradesCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let totalGradeSum = 0;
    let presentationCount = 0;


    while (command !== "Finish") {
        let presentationName = command;
        let gradeSum = 0;

        for (let curGradeCount = 1; curGradeCount <= gradesCount; curGradeCount++) {
            let curGrade = Number(input[index]);
            index++;
            gradeSum += curGrade

        }
        let avarageGrade = gradeSum / gradesCount
        console.log(`${presentationName} - ${avarageGrade.toFixed(2)}.`);
        totalGradeSum += avarageGrade
        presentationCount++;

        command = input[index];

        index++;
    }

    let grade = totalGradeSum / presentationCount
    console.log(`Student's final assessment is ${grade.toFixed(2)}.`);



}

train(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])
