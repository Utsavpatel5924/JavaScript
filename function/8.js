// 1,4,9,16,.....,n

let a=1;
let b = 10;
function loop() {
    let txt = "";
    
    while (a <= b) {

        txt += a * a + " ";
        a++;
    }
    console.log(txt);
}

loop();
