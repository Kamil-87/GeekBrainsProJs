'use strict';

class Product {
    constructor(container = '.container__product', product) {
        this.container = container;
        this.render();
        this.renderProduct();

        this.height = 60;  //ширина картинки
        this.stepCount = 1;   //шаг
        this.carouselList = document.querySelector('.carousel__list');
        this.carouselItem = document.querySelector('.carousel__item');
        this.position = 0;
        this.imgMaxContainer = document.querySelector('.js-image_max');
        this.upArrow = document.querySelector('#js__btn__prev');
        this.downArrow = document.querySelector('#js__btn__next');
        this.eventHandler();
    }

    render() {
        document.querySelector(this.container).insertAdjacentHTML('beforeend', this.renderProduct() )
    }

    renderProduct() {
    return `<h1 class="h1">Ноутбук Acer SF315-52G-52TJ</h1>
            <div class="product__wrapper">
                <div class="product__gallery">
                <!--                    карусель-->
                    <div class="product__gallery__carousel js_product__carousel">
                        <button class="carousel__btn" id="js__btn__prev"><i class="fas fa-chevron-up"></i></button>
                        <div class="carousel__hidden">
                            <ul class="carousel__list">
                                <li class="carousel__item carousel__item_active">
                                <img src="./image/small/1s.jpg" data-full_image_url="./image/1.jpg" alt="ноутбук">
                                </li>
                                <li class="carousel__item">
                                <img src="./image/small/2s.jpg" data-full_image_url="./image/2.jpg" alt="ноутбук">
                                </li>
                                <li class="carousel__item">
                                <img src="./image/small/3s.jpg" data-full_image_url="./image/3.jpg" alt="ноутбук">
                                </li>
                                <li class="carousel__item">
                                <img src="./image/small/4s.jpg" data-full_image_url="./image/4.jpg" alt="ноутбук">
                                </li>
                                <li class="carousel__item">
                                <img src="./image/small/5s.jpg" data-full_image_url="./image/5.jpg" alt="ноутбук">
                                </li>
                                <li class="carousel__item">
                                <img src="./image/small/6s.jpg" data-full_image_url="./image/6.jpg" alt="ноутбук">
                                </li>
                                <li class="carousel__item">
                                <img src="./image/small/7s.jpg" data-full_image_url="./image/7.jpg" alt="ноутбук">
                                </li>
                                <li class="carousel__item">
                                <img src="./image/small/8s.jpg" data-full_image_url="./image/8.jpg" alt="ноутбук">
                                </li>
                            </ul>
                        </div>
                        <button class="carousel__btn" id="js__btn__next"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div class="product__gallery__image-container flex-center">
                        <img src="./image/1.jpg" class="product__gallery__img js-image_max" alt="ноутбук">
                    </div>
                </div>
    
                <div class="price__column">
                    <div class="price__pay">
                        <p class="price__offers">49&nbsp;990&nbsp;&#8381;</p>
                        <button class="price__button product__card__btn">Добавить в корзину</button>
                    </div>
                </div>
            </div>
            `;
    }

    eventHandler() {
        this.upArrow.addEventListener('click', () => this.elemPrev() );
        this.downArrow.addEventListener('click', () => this.elemNext() );
        this.carouselList.addEventListener( 'click', event => this.containerClickHandler(event) );
        this.imgMaxContainer.addEventListener('click', () => new PopupBlock().renderPopupBlock() );
    }

    elemPrev() {
        // сдвиг вверх
        this.position += this.height * this.stepCount;
        this.carouselItem.style.marginTop = this.position + 'px';
    }

    elemNext() {
        // сдвиг вниз
        this.position -= this.height * this.stepCount;
        this.carouselItem.style.marginTop = this.position + 'px';
    }

    containerClickHandler(event) {
        if (event.target.tagName !== 'IMG') return;
        // alert(`hi${event}`);
        this.openImage(event.target.dataset.full_image_url);
    }

    openImage(src) {
        this.imgMaxContainer.src = src;
    }

}       //для каждого товара реализовать новую вкладку html, в будущем

class PopupBlock {
    constructor() {
        this.popupBlock = null;
        this.closePopupBtn = null;
        this.renderPopupBlock();
        this.renderPopup();
        this.closePopup();
    }

    renderPopupBlock() {
        document.querySelector('main').insertAdjacentHTML('afterbegin', this.renderPopup() );

        this.closePopupBtn = document.querySelector('.js-close_btn');
        this.popupBlock = document.querySelector('.js-popup');
        this.closePopupBtn.addEventListener('click', () => this.closePopup() );
    }

    renderPopup() {
        return `    <div class="popup__full-screen js-popup">
                        <div class="popup__block">
                            <button class="popup__block__close-btn js-close_btn">x</button>
                            <div class="popup__content">
                                <img src="./image/1.jpg" alt="ноутбук">
                                <img src="./image/2.jpg" alt="ноутбук">
                                <img src="./image/3.jpg" alt="ноутбук">
                                <img src="./image/4.jpg" alt="ноутбук">
                            </div>
                        </div>
                    </div>
                `
    }

    closePopup() {
        this.popupBlock.remove();
    }
}

new Product( '.container__product','notebook');

