function myFunc1() {
    d = new Date();
    ht = d.getHours();
    mt = d.getMinutes();
    st = d.getSeconds();
    countSec = 0
    min = 0
    hr = 0
    interval = setInterval(() => {
        d = new Date();
        stime = d.getSeconds();
        sec = (stime-st);
        if (sec < 0) {
            sec += 60;
        }
        if (stime == st) {
            min = (min + 1) % 60;
            if (min == 0) {
                hr += 1;
            }
        }
        time = hr + ":" + min + ":" + sec;
        document.getElementById('time1').innerHTML = time;
    }, 1000);
}

count = 0;
function myFunc2() {
    count += 1;
    let c = "lap" + count
    document.getElementById(c).style.color = "white";
    time = hr + ":" + min + ":" + sec;
    document.getElementById(c).innerHTML = time;
}

function myFunc3() {
    document.getElementById("time1").innerHTML = "00:00:00";
    document.getElementById("lap1").style.color = "#272510"
    document.getElementById("lap2").style.color = "#272510"
    document.getElementById("lap3").style.color = "#272510"
    document.getElementById("lap4").style.color = "#272510"
    document.getElementById("lap5").style.color = "#272510"
}

function myFunc4() {
    clearInterval(interval)
}
