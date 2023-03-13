function newHouse(input) {
    let flowers = input[0];
    let amount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let sum = 0;
    let left = 0;

    switch (flowers) {
        case "Roses":
            price = 5;
            if (amount > 80) {
                sum = (price * amount) * 0.9;
            } else {
                sum = price * amount;
            }
            break;
        case "Dahlias":
            price = 3.8;
            if (amount > 90) {
                sum = (price * amount) * 0.85;
            } else {
                sum = price * amount;
            }
            break;
        case "Tulips":
            price = 2.8;
            if (amount > 80) {
                sum = (price * amount) * 0.85;
            } else {
                sum = price * amount;
            }
            break;
        case "Narcissus":
            price = 3;
            if (amount < 120) {
                sum = (price * amount) * 1.15;
            } else {
                sum = price * amount;
            }
            break;
        case "Gladiolus":
            price = 2.5;
            if (amount < 80) {
                sum = (price * amount) * 1.2;
            } else {
                sum = price * amount;
            }
            break;
    }
    if (sum <= budget) {
        left = budget - sum;
        console.log(`Hey, you have a great garden with ${amount} ${flowers} and ${left.toFixed(2)} leva left.`)
    } else {
        left = sum - budget;
        console.log(`Not enough money, you need ${left.toFixed(2)} leva more.`);
    }
}

newHouse(["Roses", "55", "250"])