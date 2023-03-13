function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let totalPeopleCount = 0;
    let musala = 0;
    let monblan = 0;
    let kilimangaro = 0;
    let k2 = 0;
    let everest = 0;

    for (i = 1; i < input.length; i++) {
        let peopleInGroup = Number(input[i]);
        totalPeopleCount += peopleInGroup;

        if (peopleInGroup <= 5) {
            musala += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            monblan += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            kilimangaro += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else {
            everest += peopleInGroup;
        }
    }

    let musalaPercent = ((musala / totalPeopleCount) * 100).toFixed(2);
    let monblanPercent = ((monblan / totalPeopleCount) * 100).toFixed(2);
    let kilimangaroPercent = ((kilimangaro / totalPeopleCount) * 100).toFixed(2);
    let k2Percent = ((k2 / totalPeopleCount) * 100).toFixed(2);
    let everestPercent = ((everest / totalPeopleCount) * 100).toFixed(2);

    console.log(musalaPercent + "%");
    console.log(monblanPercent + "%");
    console.log(kilimangaroPercent + "%");
    console.log(k2Percent + "%");
    console.log(everestPercent + "%");
}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
