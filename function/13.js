//     1,4,12,32,80,...,n
let n = 0;
let m = 0;
let ans = 1;

let a = "";

function loop() {
    for (n = 1; n <= 10; n++) {
        a += ans + " "
        console.log(ans * n);
        ans *= 2;

    }
}

loop();
