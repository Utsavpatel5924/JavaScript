function time() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var Seconds = date.getSeconds();

    var period = "";

    if (hour >= 12) period = "PM";
    else period = "AM";

    if (hour > 12) hour = hour - 12;

    if (hour < 10) hour = "0" + hour;

    if (minutes < 10) minutes = "0" + minutes;

    if (Seconds < 10) Seconds = "0" + Seconds;

    var final = hour + ":" + minutes + ":" + Seconds + "  " + period;
    document.getElementsByTagName("div")[0].innerText = final;
    // document.getElementsByTagName("h3")[0].innerText = date;


    setTimeout(time, 1000);
  }