const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const getHole = index => document.getElementById(`hole${index}`);

function clear(alert_message) {
    dead.textContent = '0';
    lost.textContent = '0';
    alert(alert_message);
}

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = function () {
        if (getHole(i).className.includes('hole_has-mole')) {
            dead.textContent++;
        } else
            lost.textContent++;
        if (dead.textContent === '10') {
            clear('Победа!');
        } else if (lost.textContent === '5') {
            clear('Вы проиграли!')
        }
    }
}
