const form = document.querySelector("#form");
const progress = document.querySelector("#progress");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const file = e.target.querySelector("#file").files[0];
    upload(file);
})

function upload(file) {
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function (e) {
        progress.value += e.loaded / e.total;
    };

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(file);
}