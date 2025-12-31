import ScrollReveal from 'scrollreveal';

// Базовые настройки
ScrollReveal({
    distance: '60px',
    duration: 1000,
    reset: true,
    delay: 100,
})

// анимации наложенные на секции и блоки
function scrollRevialFunc() {
    ScrollReveal().reveal('.header',  {
        origin: 'top',
    })
    ScrollReveal().reveal('.discover__desc',  {
        origin: 'left',
    })
    ScrollReveal().reveal('.form',  {
        origin: 'top',
        delay: 500,
    })
    ScrollReveal().reveal('.discover__picture',  {
        origin: 'right',
    })
    ScrollReveal().reveal('.hint-discover',  {
        origin: 'left',
        delay: 500,
    })
    ScrollReveal().reveal('.scroll-down',  {
        origin: 'top',
        delay: 520,
    })
    ScrollReveal().reveal('.partners__row',  {
        origin: 'bottom',
        delay: 500,
    })
    ScrollReveal().reveal('.popular__title',  {
        origin: 'bottom',
        delay: 500,
    })
    ScrollReveal().reveal('.popular__controll',  {
        origin: 'right',
    })
    ScrollReveal().reveal('.subscribe__form',  {
        origin: 'right',
        distance: '100px',
    })
    ScrollReveal().reveal('.subscribe__desc',  {
        origin: 'top',
        distance: '100px',
        delay: 500,
    })
    ScrollReveal().reveal('.footer-nav',  {
        origin: 'bottom',
        distance: '100px',
    })
    ScrollReveal().reveal('.footer__copiright',  {
        origin: 'left',
        distance: '100px',
    })
}

export default scrollRevialFunc;