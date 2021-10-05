class Gslide {
    constructor({ main, wrapper, slides, slidesToView = 1, arrows = false, }) {
        this.position = 0;
        this.slidesToView = slidesToView,
        this.arrows = arrows,
        this.main = document.querySelector(main),
        this.wrapper = document.querySelector(wrapper),
        this.slides = document.querySelectorAll(slides);
    }
    init() {
        this.addClass();
        if (this.arrows) {
            this.addArrows();
            this.controlSlider();
        }
    }
    addClass() {
        this.main.classList.add('g-slide-main');
        this.wrapper.classList.add('g-slide-wrapper');
        this.slides.forEach(item => {
            item.classList.add('g-slide');
        });
    }
    addArrows() {
        const arrowPrev = document.createElement('div'),
            arrowNext = document.createElement('div');

        arrowPrev.className = 'g-slide-arrow g-slide-arrow__prev';
        arrowPrev.textContent = '<<';
        arrowNext.className = 'g-slide-arrow g-slide-arrow__next';
        arrowNext.textContent = '>>';

        this.main.insertAdjacentElement('afterend', arrowPrev);
        this.main.insertAdjacentElement('afterend', arrowNext);
    }
    nextSlide() {
        ++this.position;
        if (this.position > (this.slides.length - this.slidesToView)) {
            this.position = 0;
        }
        console.log(this.position);
    }

    prevSlide() {
        --this.position;
        if (this.position <= 0) {
            this.position = this.slides.length - this.slidesToView;
        }
        console.log(this.position);
    }
    controlSlider() {
        const btnLeft = document.querySelector('.g-slide-arrow__prev'),
            btnRight = document.querySelector('.g-slide-arrow__next');

        btnLeft.addEventListener('click', this.prevSlide.bind(this));
        btnRight.addEventListener('click', this.nextSlide.bind(this));
    }
}

const slider = new Gslide(
    { main: '.slider-main',
        wrapper: '.slider-wrapper',
        slides: '.slider-slide',
        slidesToView: 1,
        arrows: true, });

slider.init();
