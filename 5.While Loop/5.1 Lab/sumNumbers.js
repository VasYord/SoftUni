function sumNumbers(input) {

    let index = 0;
    index++;

    let sum = Number(input[index]);
    index++;

    while (index < input.length) {
        sum += Number(input[index]);
        index++;
    }
    console.log(sum);
}

sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"])
