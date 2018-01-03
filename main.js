document.addEventListener('DOMContentLoaded', function () {

    let interval = function () {

        let minutes = Number(document.getElementById("minutes").innerHTML) - 1;
        let seconds = 59;

        setTimeout(function () {
            document.getElementById("minutes").innerHTML = minutes;
        }, 1000)

        setInterval(function () {

            if (minutes > 0) {

                if (seconds > 0) {
                    document.getElementById("seconds").innerHTML = seconds--;
                    console.log(seconds)
                } else if (seconds == 0) {
                    document.getElementById("seconds").innerHTML = seconds;
                    seconds--;
                    document.getElementById("minutes").innerHTML = minutes--;
                } else {
                    document.getElementById("minutes").innerHTML = minutes--;
                    seconds = 59;
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

