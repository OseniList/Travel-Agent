// swiper
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function swiperFunc() {
    // init Swiper:
    const swiper = new Swiper('#swiper-popular', {
        // Optional parameters
        slidesPerView: 1,
        direction: 'horizontal',
        spaceBetween: 30,
        grabCursor: true,

        // Navigation arrows
        navigation: {
            nextEl: '#popular-next',
            prevEl: '#popular-prev',
        },
        breakpoints: {
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          },
    });
}

export default swiperFunc;


