function cleverLily(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let evenBirthdayWon = 10;
    let totalWon = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            totalWon += evenBirthdayWon;
            totalWon -= 1;
            evenBirthdayWon += 10;
        } else {
            totalWon += toyPrice;
        }
    }

    if (totalWon >= washerPrice) {
        let moneyLeft = totalWon - washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washerPrice - totalWon;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"])
