function toyShop(input) {
    let holidayPrice = Number(input[0]);
    let puzzel = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let moneyEarned = puzzel * 2.60 + doll * 3 + bear * 4.10 + minion * 8.20 + truck * 2;
    let toysSold = puzzel + doll + bear + minion + truck;

    if (toysSold >= 50) {
        moneyEarned = moneyEarned * 0.75;
    }

    let finalProfit = moneyEarned;
    finalProfit = 0.9 * finalProfit;

    if (finalProfit >= holidayPrice) {
        let moneyLeft = finalProfit - holidayPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = holidayPrice - finalProfit
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }

}
toyShop(["40.8", "20", "25", "30", "50", "10"])
