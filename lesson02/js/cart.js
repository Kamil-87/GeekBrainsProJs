'use strict';

class CartBlock {
    constructor(container='.container', product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img || img;
        this.link = product.link;
        this.render();
    }
}