function clock(input) {
    for (let h = 0; h <= 23; h++) {
        for (let m = 0; m <= 59; m++) {
            console.log(`${h}:${m}`);
        }
    }
}

clock()

    //     for (let h = 0; h < 24; h++) {
    //         for (let m = 0; m < 60; m++) {
    //             let buff = "";
    //             if (h < 10) {
    //                 buff += "0" + h;
    //             } else {
    //                 buff += h;
    //             }
    //             buff += ":"
    //             if (m < 10) {
    //                 buff += "0" + m;
    //             } else {
    //                 buff += m;
    //             }
    //             console.log(buff);
    //         }

    //     }
    // }
