// Loader
const loader = document.querySelector('.loader');
const container = document.querySelector('.container');

window.addEventListener('load', () => {
    loader.style = 'display: none !important';
    container.style = 'display: flex !important';
});

// Settings Menu
const settings = document.getElementById('settings');
const menu = document.querySelector('.settings-list');

settings.addEventListener('click', () => {
    if(menu.style.display == "none") {
        menu.style = "animation: slide-bottom 0.8s cubic-bezier(.25, .46, .45, .94) both";
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

// Play Button
const play = document.getElementById('play');
const is_saved = localStorage.getItem('is_saved');

play.addEventListener('click', () => {
    if(!is_saved) {
        window.location.href = '/create-character';
    } else {
        window.location.href = '/town';
    }
});

// is_saved = true or false;