const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-menu');


hamburgerIcon.addEventListener('click', () => {
    
    navMenu.classList.toggle('show');
});