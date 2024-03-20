function vowelCount() {
    var p = document.getElementById("result").value;
    var count = 0;
    let arr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    for (let i = 0; i < p.length; i++) {
        if (arr.includes(p[i]))

            count += 1;
    }

    document.getElementById("result").value = count;
}

function clearScreen() {
    document.getElementById("result").value = "";
}