const bars = document.querySelector('.bars');
const navMenu = document.querySelector('.menu ul');

bars.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});