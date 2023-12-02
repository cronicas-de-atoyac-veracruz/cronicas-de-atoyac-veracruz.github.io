const menuBurger = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.close');
const backdrop = document.querySelector('.backdrop');
const logo = document.querySelector('.logo');

menuBurger.addEventListener('click', toggleMenuMobile);
menuClose.addEventListener('click', toggleMenuClose);
backdrop.addEventListener('click', toggleMenuClose);

function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive');
    backdrop.classList.toggle('inactive');
    if (menuMobile.classList.contains('inactive')) {
        logo.classList.remove('hidden');
        menuBurger.classList.remove('hidden');
    } else {
        logo.classList.add('hidden');
        menuBurger.classList.add('hidden');
    }
}

function toggleMenuClose() {
    menuMobile.classList.add('inactive');
    backdrop.classList.toggle('inactive');
    logo.classList.remove('hidden');
    menuBurger.classList.remove('hidden');
}

