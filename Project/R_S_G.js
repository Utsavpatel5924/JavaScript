function string() {
    var value = prompt("Enter Your string length", value);
    var char = "abcdef ghi  jklm nopqr stuvwxyz";

    var txt = " ";

    for (let i = 0; i < value; i++) {
      txt += char.charAt(Math.floor(Math.random() * char.length));
    }
    document.getElementById("result").innerHTML = txt;
  }

  function clearScreen() {
    document.getElementById("result").innerHTML = "Your String Will Be Shown Here";
  }