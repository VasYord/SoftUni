function minNumber(input) {
    let index = 0
    let command = input[index];
    index++;
    let maxNum = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (maxNum > num) {
            maxNum = num;
        }

        command = input[index];
        index++;
    }
    console.log(maxNum);
}

minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
