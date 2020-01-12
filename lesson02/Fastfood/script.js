'use strict';

class Hamburger {
    constructor(size, stuffing, toppings = []) {
        this.container = '.hamburger__section';
        this.hamburger = [];
        this.productsProperty = [];
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = toppings;
        this._fetchProducts();
        this.findItem();
        this.getSize();
        this.getStuffing();
        this.addTopping();
        this.calculatePrice();
        this.calculateCalories();

        this.renderHamburger();
        this.render();
    }

    _fetchProducts() {
        this.productsProperty = [
            { id: 'small', price: 50, calories: 20},
            { id: 'big', price: 100, calories: 40},
            { id: 'cheese', price: 10, calories: 20},
            { id: 'salad', price: 20, calories: 5},
            { id: 'potato', price: 15, calories: 10},
            { id: 'spice', price: 15, calories: 0},
            { id: 'mayo', price: 20, calories: 5},
        ]
    }

    findItem(id) {
        return this.productsProperty.find(item => item.id === id);
    }

    getSize() {
        this.hamburger.push( this.findItem(this.size) );
    }            // Узнать размер гамбургера

    getStuffing() {
        switch (this.stuffing) {
            case 'salad':
                this.hamburger.push( this.findItem(this.stuffing) );
                break;
            case 'cheese':
                this.hamburger.push( this.findItem(this.stuffing) );
                break;
            case 'potato':
                this.hamburger.push( this.findItem(this.stuffing) );
                break;
        }
    }        // Узнать начинку гамбургера

    addTopping() {
        if( this.toppings === [] ) return;

        for(let topping of this.toppings ) {
            if(topping === 'spice') {
                this.hamburger.push( this.findItem(topping) );
            }
            if(topping === 'mayo') {
                this.hamburger.push( this.findItem(topping) );
            }
        }
    }          // Добавить добавку

    calculatePrice() {
        return this.hamburger.reduce( (totalPrice, product) => totalPrice += product.price, 0 )
    }      // Узнать цену

    calculateCalories() {
        return this.hamburger.reduce( (totalCalories, product) => totalCalories += product.calories, 0 )
    }    // Узнать калорийность

    renderHamburger() {
        const block = document.querySelector(this.container);
        block.insertAdjacentHTML('beforeend', this.render() );
    }

    render() {
        return `<div class="hamburger__ingredients">
                    <h3 class="hamburger__ingredients__h3">Ваш гамбургер</h3>
                    <ul>
                        <li>гамбургер: ${this.size}</li>
                        <li>начинка: ${this.stuffing}</li>
                        <li>наполнитель: ${this.toppings.join(', ')}</li>
                        <li>цена: ${this.calculatePrice()}</li>
                        <li>каллорийность: ${this.calculateCalories()}</li>
                    </ul>
                </div>`;
    }
}

const bigCheese = new Hamburger('big', 'cheese', ['mayo', 'spice'] );
const bigSalad = new Hamburger('big', 'salad');
const smallPotato = new Hamburger('small', 'potato', ['spice']);

console.log(bigCheese);
console.log(bigSalad);
console.log(smallPotato);
