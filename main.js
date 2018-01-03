document.addEventListener('DOMContentLoaded', function () {

    let interval = function () {

        let minutes = Number(document.getElementById("minutes").innerHTML) - 1;
        let seconds = 60;

        setTimeout(function () {
            document.getElementById("minutes").innerHTML = minutes;
        }, 1000)

        setInterval(function () {

            if (minutes > 0) {

                if (seconds > 0) {
                    seconds--;
                    document.getElementById("seconds").innerHTML = seconds;
                } else {
                    seconds = 59;
                    minutes--;
                    document.getElementById("minutes").innerHTML = minutes;
                    document.getElementById("seconds").innerHTML = seconds;
                }

            } else if (minutes == 0) {

                document.getElementById("minutes").innerHTML = minutes;
                (seconds < 0) ? clearInterval(interval) : document.getElementById("seconds").innerHTML = seconds--;

            }

        }
            , 1000)

    };


    let start = document.getElementById("trigger").addEventListener('click', interval);

})

