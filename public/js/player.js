// Loader
const loader = document.querySelector('.loader');
const container = document.querySelector('.container');

let db;
let player;

window.addEventListener('load', () => {
    loader.style = 'display: none !important';
    container.style = 'display: flex !important';
    
    (async () => {
        db = await getPlayer();
        player = db.human.warrior.image.male.teen;
        preview.innerHTML += `<img src="${player}" alt="Young Male Human Warrior">`;
    })();
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
const back = document.querySelector('.back-btn');

back.addEventListener('click', () => {
    window.location.href = '../../index.html';
});



// Form validation
// Username
const user = document.getElementById('username');
const age = document.getElementById('age');

const validate = (event) => {
    // Validation --- Username
    const username = user.value.trim();
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{2,15}$/;
    
    if (!usernameRegex.test(username)) {
        alert('Please enter a valid username.\nUsername must start with a letter, consist of only letters and numbers, and be 3 to 16 characters long.');
        event.preventDefault();
    }

    // Validation --- Age
    const ageVal = age.value.trim();
    const ageRegex = /^(1[4-9]|[2-5][0-9]|65)$/;

    if (!ageRegex.test(ageVal)) {
        alert('Please enter a valid age.\nAge must be a numeric value between 14 and 65.');
        event.preventDefault();
    }
}

// Submit Button
const submit = document.getElementById('submit');

submit.addEventListener('click', validate);


// Class Selection
const job = document.getElementById('class-selection');

job.addEventListener('change', () => {
    console.log(job.value);
});


// Character Preview
const preview = document.getElementById('character-preview');

// preview.innerHTML += '<img src="../public/assets/images/player/Human/male/young/warrior1.png" alt="Young Male Human Warrior">';


// Get player generation data
const getPlayer = async () => {
    let URL = '../public/assets/data/player.json';
    let api = await fetch(URL);
    let data = await api.text();
    let json = JSON.parse(data);
    return json;
}