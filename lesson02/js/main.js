'use strict';

class ProductList {
  constructor(container = '.catalog__section') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
    this.totalPrice();

    this.renderConsole();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 49900, img: './image/1.jpg', link: './notebook.html'},
      {id: 2, title: 'Mouse', price: 1500, },
      {id: 3, title: 'Keyboard', price: 5000, },
      {id: 4, title: 'Gamepad', price: 4500, },
    ]
  }

  render() {
    const block = document.querySelector(this.container);

    for(let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render() );
    }

  }

  totalPrice() {
    return this.allProducts.reduce( (totalPrice, item) => totalPrice += item.price, 0 );
  }

  renderConsole() {
    console.log(this.totalPrice());
  }

}

class ProductItem {
  constructor(product, img="http://placehold.it/200x200") {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = product.img || img;
    this.link = product.link;
  }

  render() {
    return `<article class="product__card"  data-id="${this.id}">
                <a href="${this.link}" class="product__card__link">
                    <img src="${this.img}" alt="картинка" class="product__card__img">
                </a>
                <h3 class="product__card__title">
                    <a href="${this.link}" class="product__card__link">${this.title}</a>
                </h3>
                <p>${this.price} руб.</p>
                <button class="product__card__btn js_by-btn">Добавить в корзину</button>
            </article>`;
  }
}

const list = new ProductList();