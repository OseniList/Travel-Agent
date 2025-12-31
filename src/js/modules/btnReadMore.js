function initTextToggle() {
    const buttons = document.querySelectorAll('.read-more');

    buttons.forEach(function(btn) {
        btn.addEventListener('click', function(){
            const text = btn.previousElementSibling;
            
            if (text.classList.contains('expended')) {
                text.classList.remove('expended')
                btn.textContent = 'Читать полностью'
            } else {
                text.classList.add('expended')
                btn.textContent = 'Свернуть'
            }
        })  
    });
}

export default initTextToggle;

