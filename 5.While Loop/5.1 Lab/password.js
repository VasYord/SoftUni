function password(input) {
    let index = 0;
    let name = input[index];
    index++;

    let pass = input[index];
    index++;

    let temPass = input[index];
    index++;
    while (pass !== temPass) {
        temPass = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);
}

password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
