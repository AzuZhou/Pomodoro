document.addEventListener('DOMContentLoaded', function () {

    let sessionStarted = false;
    let pause = false;
    let resume = false;
    let lastMin;
    let lastSec;
    let minutes = Number(document.getElementById("minutes").innerHTML) - 1;
    let seconds = 60;

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
                        lastSec = seconds;
                    } else {
                        seconds = 59;
                        minutes--;
                    }
                } else if (minutes == 0) { //interval
                    (seconds < 0) ? clearInterval(currentInterval) : document.getElementById("seconds").innerHTML = seconds--;
                }
            }

            lastMin = minutes;
            lastSec = seconds;
            document.getElementById("seconds").innerHTML = lastSec;
            document.getElementById("minutes").innerHTML = lastMin;
        }
            , 1000);
    };

    /*let newInterval = function () {

    };*/

    let startSession = function () {

        if (sessionStarted) {
            pause = true;
            interval();
            /*if (resume) {

            }*/
        } else {
            sessionStarted = true;
            interval();
        }
    };

    let start = document.getElementById("trigger").addEventListener('click', startSession);

})
