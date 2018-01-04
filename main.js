document.addEventListener('DOMContentLoaded', function () {

    let sessionStarted = false;
    let pause = false;
    let minutes;
    let seconds;
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

    let startInterval = function (minutes, seconds) {

        let theInterval = setInterval(function () {

            if (pause) {
                clearInterval(theInterval);
            } else {
                if (minutes > 0) {
                    if (seconds > 0) {
                        seconds--;
                    } else {
                        seconds = 59;
                        minutes--;
                    }
                } else if (minutes == 0) {
                    (seconds < 0) ? clearInterval(theInterval) : document.getElementById("seconds").innerHTML = seconds--;
                }
            }

            lastMin = minutes;
            lastSec = seconds;

            showTime(lastMin, lastSec);

        }
            , 1000);

    }

    let interval = function () {

        setTimeout(function () {
            return document.getElementById("minutes").innerHTML = minutes;
        }, 1000)

        minutes = Number(document.getElementById("minutes").innerHTML) - 1;
        seconds = 60;

        startInterval(minutes, seconds);
    };

    let newInterval = function () {

        minutes = lastMin;
        seconds = lastSec;

        startInterval(minutes, seconds);
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

