let d, h
setInterval(() => {
    d1 = new Date()
    d2 = d1.toLocaleString("sv-SE", {
        year: "numeric",
        month: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    }).replace(" ", "T")
    let htime = d1.getHours()
    let mtime = d1.getMinutes()
    let stime = d1.getSeconds()

    if (htime <10) {
        htime = "0" + htime
    }
    if (mtime <10) {
        mtime = "0" + mtime
    }
    if (stime <10) {
        stime = "0" + stime
    }
    let time = htime + ":" + mtime + ":" + stime
    document.getElementById("clock").innerHTML = time
    if (h == d2) {
        audio = document.getElementById("audio")
        audio.play()
    }
}, 1000);

function alarmFunc() {
    h = document.getElementById('datetime').value
}

function Reset(){
    document.getElementById("datetime").value = ""
}