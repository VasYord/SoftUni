function movieTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;



    while (command !== "Finish") {
        let movieName = command;
        let freeSpaces = Number(input[index]);
        index++;
        let command1 = input[index];
        index++;

        let spacesOccupied = 0;

        while (command1 !== "End") {
            let ticketType = command1;
            if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "standard") {
                standartTickets++;
            } else {
                kidsTickets++;
            }

            spacesOccupied++;

            if (spacesOccupied === freeSpaces) {
                break;
            }

            command1 = input[index];
            index++;
        }
        let averageOccupiedPercent = (spacesOccupied / freeSpaces) * 100;
        console.log(`${movieName} - ${averageOccupiedPercent.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTicketsPrice = studentTickets + standartTickets + kidsTickets;
    console.log(`Total tickets: ${totalTicketsPrice}`);
    let studentTicketsPercent = (studentTickets / totalTicketsPrice) * 100;
    let standartTicketsPercent = (standartTickets / totalTicketsPrice) * 100;
    let kidsTicketsPercent = (kidsTickets / totalTicketsPrice) * 100;
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standartTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTicketsPercent.toFixed(2)}% kids tickets.`);
}
movieTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])