'use strict';

const products = [
  {id: 1, title: 'Notebook', price: 20000, img: './image/4.jpg',},
  {id: 2, title: 'Mouse', price: 1500, },
  {id: 3, title: 'Keyboard', price: 5000, },
  {id: 4, title: 'Gamepad', price: 4500, },
];

const renderProduct = (title, price, img="http://placehold.it/200x200") => {
  return `<article class="product__card">
            <img src="${img}" alt="картинка" class="product__card__img">
            <h3>${title}</h3>
            <p>${price} руб.</p>
            <button class="product__card__btn js_by-btn">Добавить в корзину</button>
          </article>`;
};

const renderProducts = list => {
  const productList = list.map(product => renderProduct(product.title, product.price, product.img)).join('');
  document.querySelector('.catalog__section').insertAdjacentHTML('afterbegin', productList);

};

renderProducts(products);
