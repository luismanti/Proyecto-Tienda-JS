const navEmail = document.querySelector('.navbar-email');
const iconMobileMenu = document.querySelector('.menuHamIcon');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');


navEmail.addEventListener('click', toogleDesktopMenu);
iconMobileMenu.addEventListener('click', toogleMobileMenu);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}