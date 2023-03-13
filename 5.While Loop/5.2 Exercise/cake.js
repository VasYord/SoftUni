function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let size = width * length;
    let i = 2;
    let getPieces = String(input[i]);
    let pieces = 0;
    while (getPieces != "STOP") {
        pieces = Number(input[i]);
        size -= pieces;
        if (size <= 0)
            break;
        i++;
        getPieces = String(input[i]);
    }
    if (size <= 0) console.log(`No more cake left! You need ${Math.abs(size)} pieces more.`);
    else console.log(`${size} pieces are left.`);
}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])

