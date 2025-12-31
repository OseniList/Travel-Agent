// swiper
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

let swiper1, swiper2, swiper3, swiperHorizontal

// Optional parameters
const configVertical = {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
    a11y: false,
    freeMode: true,
    speed: 3500,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    }
}
const configHorizontal = {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
    a11y: false,
    freeMode: true,
    speed: 3500,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        650: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
}

// init Swiper:
swiper1 = new Swiper('#testimonials-col-1', configVertical);
swiper2 = new Swiper('#testimonials-col-2', configVertical);
swiper3 = new Swiper('#testimonials-col-3', configVertical);

swiperHorizontal = new Swiper('#testimonials-horizontal-swiper', configHorizontal)

// Устанавливаем брейкпоинт
const breakpoint = window.matchMedia('(max-width: 1023px)');

// Ф-я которая проверяет срабатывание медиа запроса в breakpoint
const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
        swiperHorizontal = new Swiper('#testimonials-horizontal-swiper', configHorizontal)
        if (swiper1 !== undefined) swiper1.destroy(true, true);
        if (swiper2 !== undefined) swiper2.destroy(true, true);
        if (swiper3 !== undefined) swiper3.destroy(true, true);
        return;
    } else if ( breakpoint.matches === false ) {
        swiper1 = new Swiper('#testimonials-col-1', configVertical);
        swiper2 = new Swiper('#testimonials-col-2', configVertical);
        swiper3 = new Swiper('#testimonials-col-3', configVertical);
        if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);
        return;
    }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();




