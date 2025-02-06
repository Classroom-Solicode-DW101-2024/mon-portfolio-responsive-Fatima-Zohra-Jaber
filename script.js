const burgerMenu = document.getElementById('burgerMenu');
const nav = document.getElementById('nav');


burgerMenu.addEventListener('click', () => {
    
    nav.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !burgerMenu.contains(event.target)) {
        nav.classList.remove('open'); 
    }
});