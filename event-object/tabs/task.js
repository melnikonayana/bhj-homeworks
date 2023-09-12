const tabNavigations = Array.from(document.querySelectorAll('.tab__navigation'));

tabNavigations.forEach((tabNavigation) => {
    tabNavigation.addEventListener('click', (ev) => {
        const tabs = Array.from(tabNavigation.getElementsByClassName('tab'));
        const tabContents = Array.from(tabNavigation.nextElementSibling.getElementsByClassName('tab__content'));
        if (ev.target.classList.contains('tab')) {
            tabs.forEach((tab, index
            ) => {
                if (tab === ev.target) {
                    tab.classList.add('tab_active');
                    tabContents[index].classList.add('tab__content_active');
                } else {
                    tab.classList.remove('tab_active');
                    tabContents[index].classList.remove('tab__content_active');
                }
            });
        }
    })
})

