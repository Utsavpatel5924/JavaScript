function Count() {

    var text = document.getElementById("result").value;
    document.getElementById("result").value = text.length;
}

function clearScreen() {

    document.getElementById("result").value = "";
}

function countWord() {

    var txt = document.getElementById("result").value;

    var arr = txt.split(" ");

    document.getElementById("result").value = arr.length;


}