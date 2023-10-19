const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        loader.remove();
        const valutes = JSON.parse(this.responseText).response.Valute;
        let itemsStr = '';
        for (let key in valutes) {
            const item = `<div class="item">
            <div class="item__code">
                    ${key}
                </div>
                <div class="item__value">
                    ${valutes[key].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>`
            itemsStr += item;
        }
        items.innerHTML = itemsStr;
    }
}
