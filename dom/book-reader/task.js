const fontSize = document.querySelectorAll('.font-size');

fontSize.forEach((element) => {
    element.addEventListener('click', (ev) => {
        ev.preventDefault();
        fontSize.forEach(item => item.classList.remove('font-size_active'));
        element.classList.add('font-size_active');
        const book = document.querySelector('.book');
        if (element.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        } else if (element.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-small', 'book_fs-big');
        }
    })
})

