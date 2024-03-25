const back = document.querySelector('.back-arrow');
const settings = document.getElementById('settings');
const menu = document.querySelector('.settings-list');

const story = document.getElementById('story');
const training = document.getElementById('training');
const arena = document.getElementById('arena');
const store = document.getElementById('store');

// Story screen
story.addEventListener('click', () => {
    window.location.href = '../views/story.html';
});

// Back button
back.addEventListener('click', () => {
    window.location.href = '../index.html';
});

// Settings
settings.addEventListener('click', () => {
    if(menu.style.display == "none") {
        menu.style = "animation: slide-bottom 0.8s cubic-bezier(.25, .46, .45, .94) both";
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});
