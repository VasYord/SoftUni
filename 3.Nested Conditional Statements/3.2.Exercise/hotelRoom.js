function hotelRoom(input) {
    let month = input[0];
    let nightCount = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = nightCount * 50.00;
            apartmentPrice = nightCount * 65.00;
            if (nightCount > 7 && nightCount <= 14) {
                studioPrice *= 0.95;
            } else if (nightCount > 14) {
                studioPrice *= 0.70;
                apartmentPrice *= 0.90;
            }
            break;
        case "June":
        case "September":
            studioPrice = nightCount * 75.20;
            apartmentPrice = nightCount * 68.70;
            if (nightCount > 14) {
                studioPrice *= 0.80;
                apartmentPrice *= 0.90;
            }
            break;
        case "July":
        case "August":
            studioPrice = nightCount * 76.00;
            apartmentPrice = nightCount * 77.00;
            if (nightCount > 14) {
                apartmentPrice *= 0.90;
            }
            break;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"])
