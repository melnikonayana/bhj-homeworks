const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = function () {
        if (getHole(i).className.includes('hole_has-mole')) {
            dead.textContent++;
        } else
            lost.textContent++;
        if (dead.textContent === '10') {
            dead.textContent = '0';
            lost.textContent = '0';
            alert('Победа!');
        } else if (lost.textContent === '5') {
            dead.textContent = '0';
            lost.textContent = '0';
            alert('Вы проиграли!');
        }
    }
}
