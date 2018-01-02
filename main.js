document.addEventListener('DOMContentLoaded', function () {

    let changeSeconds = function () {
        let seconds = 59;
        document.getElementById("seconds").innerHTML = seconds;
    };

    document.querySelector("#trigger").onclick = function () { setTimeout(changeSeconds, 1000) };
});
