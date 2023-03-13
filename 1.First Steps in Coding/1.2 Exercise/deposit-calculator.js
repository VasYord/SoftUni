function calculator(input) {
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let interest = Number(input[2]);

    let decimalInterest = interest / 100;

    let totalInterest = deposit * decimalInterest;
    let interestPerMonth = totalInterest / 12;
    let amount = deposit + months * interestPerMonth;
    console.log(amount);
}

calculator(["200", "3", "5.7"])