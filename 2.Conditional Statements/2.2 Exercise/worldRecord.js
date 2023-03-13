function worldRecord(input) {
    let recordSeconds = Number(input[0]);
    let lengthM = Number(input[1]);
    let secondsPerM = Number(input[2]);

    let timeFullLength = secondsPerM * lengthM;
    let timeSlowed = Math.floor(lengthM / 15) * 12.5;
    let timeFinished = timeFullLength + timeSlowed;



    if (recordSeconds <= timeFinished) {
        let timeToRecord = timeFinished - recordSeconds;
        console.log(`No, he failed! He was ${timeToRecord.toFixed(2)} seconds slower.`)

    } else if (timeFinished < recordSeconds) {
        let newRecord = timeFinished;
        console.log(`Yes, he succeeded! The new world record is ${newRecord.toFixed(2)} seconds.`)
    }
}

worldRecord(["10464", "1500", "20"])
