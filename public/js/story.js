const loader = document.querySelector('.loader');
const container = document.querySelector('.container');
const locked = document.querySelectorAll('.locked');
const back = document.querySelector('.back-arrow');

console.log(locked);

let story = localStorage.getItem('story');

window.addEventListener('load', () => {
    loader.style = 'display: none !important';
    container.style.display = 'flex';
});

back.addEventListener('click', () => {
    window.location.href = '../../../views/town.html';
});