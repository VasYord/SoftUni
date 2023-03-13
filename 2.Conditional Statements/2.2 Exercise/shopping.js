function shopping(input) {
    let budget = Number(input[0]);
    let videocardS = Number(input[1]);
    let proccesorS = Number(input[2]);
    let ramS = Number(input[3]);

    let videocardsPrice = videocardS * 250;
    let proccesorsPrice = proccesorS * (videocardsPrice * 0.35);
    let ramPrice = ramS * (videocardsPrice * 0.1)

    let moneyNeeded = videocardsPrice + proccesorsPrice + ramPrice;
    let discountedPrice = 0;

    if (videocardS > proccesorS) {
        discountedPrice = moneyNeeded * 0.85;
    } else {
        discountedPrice = moneyNeeded;
    }

    if (budget >= discountedPrice) {
        let moneyLeft = budget - discountedPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    } else if (budget < discountedPrice) {
        let noMoneyLeft = discountedPrice - budget;
        console.log(`Not enough money! You need ${noMoneyLeft.toFixed(2)} leva more!`)
    }
}
shopping(["900", "2", "1", "3"])
