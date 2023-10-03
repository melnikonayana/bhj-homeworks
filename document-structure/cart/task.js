const products = document.querySelectorAll('.product');

products.forEach((product) => {
    const dec = product.querySelector('.product__quantity-control_dec');
    const inc = product.querySelector('.product__quantity-control_inc');

    dec.addEventListener('click', () => {
        const value = product.querySelector('.product__quantity-value');
        let numb = +value.textContent;
        numb--;
        if (numb >= 1) {
            value.textContent = numb.toString();
        }
    })
    inc.addEventListener('click', () => {
        const value = product.querySelector('.product__quantity-value');
        let numb = +value.textContent;
        numb++;
        value.textContent = numb.toString();
    })

    const cartProducts = document.querySelector('.cart__products');
    product.querySelector('.product__add').addEventListener('click', (ev) => {
        const product = ev.target.closest('.product');

        const productInfo = {
            id: product.dataset.id,
            imgSrc: product.querySelector('.product__image').getAttribute('src'),
            counter: product.querySelector('.product__quantity-value').innerText,
        };

        const itemInProduct = cartProducts.querySelector(`[data-id = "${productInfo.id}"]`);
        if (itemInProduct) {
            const counterEl = itemInProduct.querySelector('.cart__product-count');
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
        } else {
            const productItemHTML = `<div class="cart__product" data-id="${productInfo.id}">
            <img class="cart__product-image" src="${productInfo.imgSrc}" alt="">
            <div class="cart__product-count">${productInfo.counter}</div>
            </div>`;

            cartProducts.insertAdjacentHTML('beforeend', productItemHTML);
        }
    })
})
