function yardGreening(input) {
    let meters = Number(input[0]);
    let pricePerM = 7.61;

    let price = meters * pricePerM;

    let discount = price * 0.18;

    let finalPrice = price - discount;

    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)

}

yardGreening(["550"])