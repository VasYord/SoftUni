function equipment(input) {
    let yearFee = Number(input[0]);

    let sneakersPrice = yearFee * 0.6;
    let kitPrice = sneakersPrice * 0.8;
    let ballPrice = kitPrice * 0.25;
    let miscPrice = ballPrice * 0.2;

    let fullAmount = yearFee + sneakersPrice + kitPrice + ballPrice + miscPrice;
    console.log(fullAmount);
}

equipment(["365"])