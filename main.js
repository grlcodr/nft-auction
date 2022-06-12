document.addEventListener('DOMContentLoaded', function() {
    countdown();
}, false);

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
 
function countdown() {
    let day = document.getElementById('day');
    let hour = document.getElementById('hour');
    let min = document.getElementById('mins');
    let sec = document.getElementById('secs');
    let countDownDate = new Date("July 1, 2022 00:00:00").getTime();
    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        day.innerText = days;
        hour.innerHTML = hours;
        min.innerHTML = minutes;
        sec.innerHTML = seconds;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").style.display = "none"
        }
    }, 1000);
}
