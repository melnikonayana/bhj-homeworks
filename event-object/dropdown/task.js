const dropdowns = Array.from(document.getElementsByClassName('dropdown__value'));

dropdowns.forEach((dropdown) => {
    let dropdownContent = dropdown.nextElementSibling;
    dropdown.addEventListener('click', function () {
            dropdownContent.classList.toggle('dropdown__list_active');
        })

    let dropdownLinks = dropdownContent.querySelectorAll('.dropdown__link');
    dropdownLinks.forEach((link) => {
        link.addEventListener('click', function (ev) {
            ev.preventDefault();
            dropdown.textContent = link.textContent;
            dropdownContent.classList.toggle('dropdown__list_active');
        })
    })
})

