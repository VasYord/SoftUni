function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;

    let pointFromAcademy = Number(input[index]);
    index++;

    let n = Number(input[index]);
    index++;


    for (let i = 0; i < n; i++) {
        let currentName = input[index]
        index++;

        let currentPoint = Number(input[index]);
        index++;

        let totalPoints = currentName.length * currentPoint / 2;
        if (pointFromAcademy <= 1250.5) {
            pointFromAcademy += totalPoints;
        }
    }

    if (pointFromAcademy <= 1250.5) {
        let diff = Math.abs(pointFromAcademy - 1250.5);
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${pointFromAcademy.toFixed(1)}!`)
    }
}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
