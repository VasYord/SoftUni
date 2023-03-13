function bookList(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let timeToRead = bookPages / pagesPerHour;
    let hoursPerDay = timeToRead / days;

    console.log(hoursPerDay);
}

bookList(["212", "20", "2"])