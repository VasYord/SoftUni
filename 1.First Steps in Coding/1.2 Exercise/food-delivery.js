function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veganMenus = Number(input[2]);

    let chickenPrice = chickenMenus * 10.35;
    let fishPrice = fishMenus * 12.4;
    let veganPrice = veganMenus * 8.15;

    let menuPrice = chickenPrice + fishPrice + veganPrice;

    let desertPrice = menuPrice * 0.2;
    let deliveryFee = 2.5;

    let fullAmount = menuPrice + desertPrice + deliveryFee;
    console.log(fullAmount);
}

foodDelivery(["2", "4", "3"])