const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const title = JSON.parse(xhr.responseText).data.title;
        const answers = JSON.parse(xhr.responseText).data.answers;
        pollTitle.innerHTML = title;

        createButton(answers);
    }
})

function createButton(answerList) {
    for (const key in answerList) {
        const btn = document.createElement('button');
        btn.className = 'poll__answer';
        btn.innerHTML = answerList[key];
        pollAnswers.appendChild(btn);

        btn.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    }
}



