function lunchBreak(input) {
    let seriesName = input[0];
    let seriesTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let eatingTime = breakTime * 0.125;
    let restTime = breakTime * 0.25;

    let timeLeft = breakTime - eatingTime - restTime;

    if (timeLeft >= seriesTime) {
        let minsLeft = timeLeft - seriesTime
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(minsLeft)} minutes free time.`)
    } else if (timeLeft < seriesTime) {
        let noMinsLeft = seriesTime - timeLeft;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(noMinsLeft)} more minutes.`)
    }
}
lunchBreak(["Game of Thrones", "60", "96"])
