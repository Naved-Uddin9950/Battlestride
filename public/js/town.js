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

// Back Button
const back = document.querySelector('.back-arrow');

back.addEventListener('click', () => {
    window.location.href = '../index.html';
});


// Story screen
const story = document.getElementById('story');
const training = document.getElementById('training');
const arena = document.getElementById('arena');
const store = document.getElementById('store');

story.addEventListener('click', () => {
    window.location.href = '../views/story.html';
});
