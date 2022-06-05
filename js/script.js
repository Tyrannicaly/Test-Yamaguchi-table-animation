const table = document.querySelector('.main-image__table');
const buttonUp = document.querySelector('.main-image__ellipse--up');
buttonUp.addEventListener('click', () => {
    table.classList.add('animation');
    // table.style.transform = 'translateY(-50px)';
})
const buttonDown = document.querySelector('.main-image__ellipse--down');
buttonDown.addEventListener('click', () => {
    table.classList.remove('animation');
    // table.style.transform = 'translateY(-50px)';
})