function oldBooks(input) {
    let favourite = input[0];
    let index = 1;
    let bookFound = false;

    let nextBook = input[index];
    while (nextBook !== "No More Books") {
        if (nextBook === favourite) {
            bookFound = true;
            break;
        }
        index++;
        nextBook = input[index];
    }
    if (bookFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}
oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])
