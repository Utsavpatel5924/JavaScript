//   1,2,4,8,16,...,n
let n = 1;
let m = 10;
let ans = 1;

let txt ="";

function loop() {
    for (n = 1; n <= m; n++) {
        txt += ans + " "

        ans *= 2;
    }

    console.log(txt);
}

loop();
