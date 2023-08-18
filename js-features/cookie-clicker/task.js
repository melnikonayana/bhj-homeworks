const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const clickSpeed = document.getElementById('speed__counter');

let lastClickTime = Date.now();
cookie.onclick = function () {
    if (cookie.width === 200) {
        cookie.width = 230;
    } else {
        cookie.width = 200;
    }
    counter.textContent++;
    const currentClickTime = Date.now();
    clickSpeed.textContent = (1 / ((currentClickTime - lastClickTime) / 1000)).toFixed(2);
    lastClickTime = currentClickTime;
}
