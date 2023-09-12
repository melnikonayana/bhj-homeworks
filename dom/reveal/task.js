const reveal = document.querySelectorAll('.reveal');
window.addEventListener('scroll', function () {
    reveal.forEach((item) => {
        const elementTop = item.getBoundingClientRect().top;
        const elementBottom = item.getBoundingClientRect().bottom;
        if (elementTop > window.innerHeight || elementBottom < 0) {
            item.classList.remove('reveal_active');
        } else {
            item.classList.add('reveal_active');
        }
    })
})