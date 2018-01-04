document.addEventListener('DOMContentLoaded', function () {

    let sessionStarted = false;
    let pause = false;
    let minutes = Number(document.getElementById("minutes").innerHTML) - 1;
    let seconds = 60;
    let lastMin;
    let lastSec;
    let min;
    let sec;
    let counter = 1;

    let clickCounter = function () {
        counter++;
    }

    let resume = function () {
        if (counter % 2 != 0) {
            return true;
        } else {
            return false;
        }
    }

    let showTime = function (lastMin, lastSec) {
        sec = lastSec.toString();
        min = lastMin.toString();

        if (sec.length == 1) {
            sec = "0" + sec;
            document.getElementById("seconds").innerHTML = sec;
        } else {
            document.getElementById("seconds").innerHTML = lastSec;
        }

        if (min.length == 1) {
            min = "0" + min;
            document.getElementById("minutes").innerHTML = min;
        } else {
            document.getElementById("minutes").innerHTML = lastMin;
        }
    }

    let interval = function () {

        setTimeout(function () {
            return document.getElementById("minutes").innerHTML = minutes;
        }, 1000)

        let currentInterval = setInterval(function () {

            if (pause) {
                clearInterval(currentInterval);
            } else {
                if (minutes > 0) {
                    if (seconds > 0) {
                        seconds--;
                    } else {
                        seconds = 59;
                        minutes--;
                    }
                } else if (minutes == 0) {
                    (seconds < 0) ? clearInterval(currentInterval) : document.getElementById("seconds").innerHTML = seconds--;
                }
            }

            lastMin = minutes;
            lastSec = seconds;

            showTime(lastMin, lastSec);

        }
            , 1000);
    };

    let newInterval = function () {
        lastMin = Number(document.getElementById("minutes").innerHTML);
        lastSec = Number(document.getElementById("seconds").innerHTML);
        minutes = lastMin;
        seconds = lastSec;

        let otherInterval = setInterval(function () {

            if (pause) {
                clearInterval(otherInterval);
            } else {
                if (minutes > 0) {
                    if (seconds > 0) {
                        seconds--;
                    } else {
                        seconds = 59;
                        minutes--;
                    }
                } else if (minutes == 0) {
                    (seconds < 0) ? clearInterval(currentInterval) : document.getElementById("seconds").innerHTML = seconds--;
                }
            }

            lastMin = minutes;
            lastSec = seconds;

            showTime(lastMin, lastSec);

        }, 1000)
    };

    let startSession = function () {

        if (sessionStarted) {
            if (resume()) {
                pause = false;
                newInterval();
            } else {
                pause = true;
                newInterval();
            }
        } else {
            sessionStarted = true;
            interval();
        }
    };

    let start = document.getElementById("trigger").addEventListener('click', startSession);
    let count = document.getElementById("trigger").addEventListener('click', clickCounter);

})

/*
    */