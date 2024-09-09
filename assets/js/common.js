const menu = document.querySelector('nav ul');
menu.style.left = '-100%';

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(element => element.addEventListener('click', () => menu.style.left = '-100%'));

const toggle = document.querySelector('.menu-toggle'); 
toggle.addEventListener('click', () => {            
    menu.style.transition = 'all 0.5s ease-in-out';
    menu.style.left = menu.style.left == '0px' ? '-100%' : '0px';
})