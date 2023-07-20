const timer = document.getElementById('timer');
let time = 5460;

function countdown() {
    let hours = Math.floor(time / 3600);
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = Math.floor((time % 3600) / 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.textContent = `${hours}:${minutes}:${seconds}`
    time--;
    if (timer.textContent === '00:00:00') {
        alert('Вы победили в конкурсе!');
}}
setInterval(countdown, 1000);