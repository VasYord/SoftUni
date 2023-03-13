function supliesForSchool(input) {
    let pensAmount = Number(input[0]);
    let markersAmount = Number(input[1]);
    let liquidAmount = Number(input[2]);
    let discount = Number(input[3]);

    let discountDecimal = discount / 100;

    let totalPens = pensAmount * 5.8;
    let totalMarkers = markersAmount * 7.2;
    let totalLiquid = liquidAmount * 1.2;
    let fullPrice = totalPens + totalMarkers + totalLiquid;

    let finalPrice = fullPrice - (fullPrice * discountDecimal);
    console.log(finalPrice);

}

supliesForSchool(["2", "3", "4", "25"])