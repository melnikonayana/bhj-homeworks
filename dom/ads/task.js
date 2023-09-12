const rotator = document.querySelectorAll('.rotator__case');
let counter = 0;

function changeClass() {
    rotator[counter].classList.toggle('rotator__case_active');
    counter++;
    rotator[counter].classList.toggle('rotator__case_active');

    if(counter === rotator.length - 1) {
        rotator[counter].classList.toggle('rotator__case_active');
        counter = 0;
        rotator[counter].classList.toggle('rotator__case_active');
    }
}
setInterval(changeClass,1000)