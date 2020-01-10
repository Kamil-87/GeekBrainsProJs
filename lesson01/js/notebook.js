'use strict';

const productCarousel = document.querySelector('.js_product__carousel');

const slider = {
    height: 60,  //ширина картинки
    stepCount: 1,   //шаг
    carouselList: productCarousel.querySelector('.carousel__list'),
    carouselItem: productCarousel.querySelector('.carousel__item'),
    position: 0,

    imgMaxContainer: document.querySelector('.js-image_max'),
    popupBlock: null,
    closePopupBtn: null,


    init() {
        const upArrow = document.querySelector('#js__btn__prev');
        const downArrow = document.querySelector('#js__btn__next');
        upArrow.addEventListener('click', () => this.elemPrev() );
        downArrow.addEventListener('click', () => this.elemNext() );
        this.carouselList.addEventListener( 'click', event => this.containerClickHandler(event) );

        this.imgMaxContainer.addEventListener('click', () => this.renderPopupBlock() );
    },

    elemPrev() {
        // сдвиг вверх
        this.position += this.height * this.stepCount;
        this.carouselItem.style.marginTop = this.position + 'px';
    },

    elemNext() {
        // сдвиг вниз
        this.position -= this.height * this.stepCount;
        this.carouselItem.style.marginTop = this.position + 'px';
    },

    containerClickHandler(event) {
        if (event.target.tagName !== 'IMG') return;
        // alert(`hi${event}`);
        this.openImage(event.target.dataset.full_image_url);
    },

    openImage(src) {
        this.imgMaxContainer.src = src;
    },


    //popup block
    renderPopupBlock() {
        document.querySelector('main').insertAdjacentHTML('afterbegin', this.renderPopup() );

        this.closePopupBtn = document.querySelector('.js-close_btn');
        this.popupBlock = document.querySelector('.js-popup');

        this.closePopupBtn.addEventListener('click', () => this.closePopup() );
    },

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
    },

    closePopup() {

        this.popupBlock.remove();
    },

};

slider.init();

