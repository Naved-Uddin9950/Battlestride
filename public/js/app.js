const settings = document.getElementById('settings');
const menu = document.querySelector('.settings-list');
const play = document.getElementById('play');

settings.addEventListener('click', () => {
    if(menu.style.display == "none") {
        menu.style = "animation: slide-bottom 0.8s cubic-bezier(.25, .46, .45, .94) both";
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

play.addEventListener('click', () => {
    window.location.href = 'views/town.html';
});