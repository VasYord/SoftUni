function salary(input) {
    let openTabs = Number(input[0]);
    let mySalary = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let website = input[i];

        if (website === "Facebook") {
            mySalary -= 150;
        } else if (website === "Instagram") {
            mySalary -= 100;
        } else if (website === "Reddit") {
            mySalary -= 50;
        }

    }


    if (mySalary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(mySalary);
    }
}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
