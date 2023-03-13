function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let peopleCount = Number(input[1]);
    let onePersonClothes = Number(input[2]);

    let decor = movieBudget * 0.1;


    if (peopleCount > 150) {
        onePersonClothes = onePersonClothes * 0.9;
    } else {
        onePersonClothes = onePersonClothes;
    }

    let moneyNeeded = decor + onePersonClothes * peopleCount;

    if (movieBudget < moneyNeeded) {
        let notEnough = (moneyNeeded - movieBudget).toFixed(2)
        console.log("Not enough money!")
        console.log(`Wingard needs ${notEnough} leva more.`)
    } else {
        let moneyEnough = (movieBudget - moneyNeeded).toFixed(2)
        console.log("Action!")
        console.log(`Wingard starts filming with ${moneyEnough} leva left.`)
    }

}

godzillaVsKong(["20000", "120", "55.5"])
