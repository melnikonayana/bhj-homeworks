const hasTooltips = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach((hasTooltip) => {
    // создаем переменную, хранящую св-во title нажатой ссылки
    const title = hasTooltip.title;
    // создаем элемент подсказки и указываем класс tooltip
    const element = document.createElement('div');
    element.classList.add('tooltip');
    // добавляем в элемент подсказки текст из св-ва title
    element.textContent = title;
    hasTooltip.addEventListener('click', (event) => {
        event.preventDefault();
        element.classList.toggle('tooltip_active');
        const coords = hasTooltip.getBoundingClientRect();
        element.style.left = coords.left + 'px';
        element.style.top = coords.bottom + 'px';
        document.body.append(element);
    })
})


