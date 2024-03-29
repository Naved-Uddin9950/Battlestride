// player variables
let db;
let player;
let stats;
let gender;
let ageGroup;

// Loader
const loader = document.querySelector('.loader');
const container = document.querySelector('.container');


window.addEventListener('load', () => {
    loader.style = 'display: none !important';
    container.style = 'display: flex !important';

    (async () => {
        db = await getPlayer();
        player = db.human.warrior.image.male.teen;
        stats = db.human.warrior.stats;
        gender = 'male';
        ageGroup = 'teen';
        preview.innerHTML += `<img src="${player}" alt="Young Male Human Warrior" id="player-preview">`;
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


// Gender Selection
const genMale = document.getElementById('success-outlined');
const genFemale = document.getElementById('danger-outlined');

genMale.onchange = () => {
    gender = 'male';
    showPlayer();
};

genFemale.onchange = () => {
    gender = 'female';
    showPlayer();
};


// Age Selection
age.addEventListener('change', () => {
    let ageValue =  parseInt(age.value);
    
    if(ageValue>=14 && ageValue<=17) {
        ageGroup = 'teen';
    } else if(ageValue>=18 && ageValue<=21) {
        ageGroup = 'young';
    } else if(ageValue>=22 && ageValue<=30) {
        ageGroup = 'adult';
    } else if(ageValue>=31 && ageValue<=49) {
        ageGroup = 'middle';
    } else if(ageValue>=50 && ageValue<=65) {
        ageGroup = 'old';
    } else {
        console.log('Error : Invalid age. Please enter age between 14 to 65');
    }

    showPlayer();
});


// Class Selection & Bloodline Selection
const job = document.getElementById('class-selection');
const race = document.getElementById('bloodline-selection');

const prev = document.getElementById('player-preview');

job.addEventListener('change', () => { showPlayer() });


// Character Preview
const preview = document.getElementById('character-preview');

const showPlayer = () => {
    let selectedClass = (job.value).toLowerCase();
    let selectedBloodline = (race.value).toLowerCase();
    
    let playerID = document.getElementById('player-preview');
    
    stats = db[selectedBloodline][selectedClass].stats;
    player = db[selectedBloodline][selectedClass].image[gender][ageGroup]
    playerID.remove();
    
    preview.innerHTML = `<img src="${player}" alt="${ageGroup} ${gender} ${selectedBloodline} ${selectedClass}" id="player-preview">`;
    
    console.log(player);
}


// Get player generation data
const getPlayer = async () => {
    let URL = '../public/assets/data/player.json';
    let api = await fetch(URL);
    let data = await api.text();
    let json = JSON.parse(data);
    return json;
}