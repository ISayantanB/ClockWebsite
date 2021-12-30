setInterval(() => {
    d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    
    let hour = htime%12
    if (hour==0) {
        if (htime/12==1) {
            hour = 12
        } else {
            hour = 0
        }
    }
    if (htime < 10) {
        htime = "0" + htime
    }
    if (hour<10) {
        hour = "0" + hour
    }
    if (mtime<10) {
        mtime = "0" + mtime
    }
    if (stime<10) {
        stime = "0" + stime
    }
    let time1 = hour + ":" + mtime + ":" + stime
    if (parseInt(htime/12) == 0) {
        time1 = time1 + "AM"
    } else {
        time1 = time1 + "PM"
    }
    document.getElementById("time1").innerHTML = time1

    let time2 = htime + ":" + mtime + ":" + stime
    document.getElementById("time2").innerHTML = time2
}, 1000);