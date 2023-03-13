function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let percent = Number(input[3]);

    let percentDecimal = percent / 100;

    let bulk = length * width * heigth;
    let bulkLitres = bulk * 0.001;
    let LitersNeeded = bulkLitres * (1 - percentDecimal);
    console.log(LitersNeeded);

}

fishTank(["85", "75", "47", "17"])