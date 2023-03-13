function repainting(input) {
    let naylons = Number(input[0]);
    let paint = Number(input[1]);
    let liquid = Number(input[2]);
    let workHours = Number(input[3]);

    let naylonsTotal = (naylons + 2) * 1.5;
    let paintTotal = (paint + (paint * 0.1)) * 14.5;
    let liquidTotal = liquid * 5;
    let bagsTotal = 0.4;

    let materialsPrice = naylonsTotal + paintTotal + liquidTotal + bagsTotal;

    let workPricePerHour = materialsPrice * 0.3;
    let totalWorkPrice = workPricePerHour * workHours;

    let totalAmount = materialsPrice + totalWorkPrice;

    console.log(totalAmount);
}

repainting(["10", "11", "4", "8"])