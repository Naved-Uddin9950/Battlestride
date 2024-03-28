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

// Chapter list
const locked = document.querySelectorAll('.locked');
const unlocked = document.querySelectorAll('.unlocked');
const back = document.querySelector('.back-arrow');
const chapter = document.querySelectorAll('.chapter');

// loads unlocked chapters list from local storage
let load_story = localStorage.getItem('story');
let data;

if(!load_story)
{
    data = [0, 1];
} else {
    let chapters = localStorage.getItem('story');
    data = chapters.split(',');
}

// Back Button
back.addEventListener('click', () => {
    window.location.href = '../../../views/town.html';
});

// populate unlocked chapters
for(let i=0; i<unlocked.length; i++) {
    unlocked[i].innerHTML += ` <i class="fa-solid fa-lock-open">`;
}

// populate locked chapters
for(let i=0; i<locked.length; i++) {
    locked[i].style = 'text-decoration: line-through 4px';
    locked[i].innerHTML += ` <i class="fa-solid fa-lock">`;
}

// Function to unlock a chapter
let unlock = (chapter) => {
    data = [];
    for(let i=0; i<=chapter; i++) {
        data.push(i);
    }
}

// Function to display unlocked chapters
let display = (item) => {
    item.classList.remove('locked');
    item.classList.add('unlocked');
    item.style = 'text-decoration: none';
    item.innerHTML = `${item.innerText} <i class="fa-solid fa-lock-open"></i>`;
}

// populated unlocked chapters
for (let i=0; i<data.length-1; i++) {
    display(chapter[i]);
}

// saves the unlocked chapters
let save_story = localStorage.setItem('story', data);