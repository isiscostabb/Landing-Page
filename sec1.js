
const anterior = document.querySelector('.left')
const proximo = document.querySelector('.right')
const slider = document.querySelector('.cards')

anterior.addEventListener('click', () => {
    slider.scrollLeft -= 300
}) 

proximo.addEventListener('click', () => {
    slider.scrollLeft += 300
}) 