function sumOfNum(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            counter++;
            if (x + y === magicNum) {
                isFound = true;
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNum})`);
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }

}

sumOfNum(["1",
    "10",
    "5"])
