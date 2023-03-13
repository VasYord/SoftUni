function tradeCommissions(input) {
    let city = input[0];
    let amount = Number(input[1]);
    let commission = 0;

    if (amount >= 0 && amount <= 500) {
        switch (city) {
            case "Sofia":
                console.log(commission = (amount * 0.05).toFixed(2));
                break;
            case "Varna":
                console.log(commission = (amount * 0.045).toFixed(2));
                break;
            case "Plovdiv":
                console.log(commission = (amount * 0.055).toFixed(2));
                break;
            default: console.log("error"); break;
        }

    } else if (amount > 500 && amount <= 1000) {
        switch (city) {
            case "Sofia":
                console.log(commission = (amount * 0.07).toFixed(2));
                break;
            case "Varna":
                console.log(commission = (amount * 0.075).toFixed(2));
                break;
            case "Plovdiv":
                console.log(commission = (amount * 0.08).toFixed(2));
                break;
            default: console.log("error"); break;
        }

    } else if (amount > 1000 && amount <= 10000) {
        switch (city) {
            case "Sofia":
                console.log(commission = (amount * 0.08).toFixed(2));
                break;
            case "Varna":
                console.log(commission = (amount * 0.1).toFixed(2));
                break;
            case "Plovdiv":
                console.log(commission = (amount * 0.12).toFixed(2));
                break;
            default: console.log("error"); break;
        }

    } else if (amount > 10000) {
        switch (city) {
            case "Sofia":
                console.log(commission = (amount * 0.12).toFixed(2));
                break;
            case "Varna":
                console.log(commission = (amount * 0.13).toFixed(2));
                break;
            case "Plovdiv":
                console.log(commission = (amount * 0.145).toFixed(2));
                break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error")
    }
}

tradeCommissions(["Sofia", "1500"])

