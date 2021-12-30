function myFunc1() {
    let stime = ((document.getElementById("hour").value) * 60 * 60) + ((document.getElementById("minute").value) * 60) + (document.getElementById("second").value)
    time = stime
    stop = setInterval(() => {
        time -= 1
        document.getElementById("second").value = time
        if (time==0) {
            clearInterval(stop)
        }
    }, 1000);
    setTimeout(() => {
        msg = new SpeechSynthesisUtterance('Time\'s up!!!')
        window.speechSynthesis.speak(msg)
    }, stime*1000);
}

function myFunc2() {
    document.getElementById("hour").value = "Hr"
    document.getElementById("minute").value = "Min"
    document.getElementById("second").value = "Sec"
}
