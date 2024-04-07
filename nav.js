
const nav = document.querySelector('nav');

document.addEventListener('scroll', () => {
    if ((window.scrollY > 250 && window.innerWidth > 600) || (window.scrollY > 5 && window.innerWidth < 600)) {
        nav.classList.add('scrolling');
    } else {
        nav.classList.remove('scrolling');
    }
});
