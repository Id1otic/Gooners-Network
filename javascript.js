// <-- Global Functions -->
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function pageChange(page) {
    document.location = `${page.toLowerCase()}.html`
}

function play(game) {
    document.body.innerHTML = `<iframe src="${game}"></iframe>`
    document.title = "about:blank"
}

const current_href = window.location.pathname;

// <-- Goonables -->
// Choosing image
const goon_image_locations = "img/goonables/";
const goon_image_names = {
    "Emma_Frost.png": 32,
    "Squirrel_Girl.webp": 32,
    "Black_Widow.webp": 32,
    "Ugly.png": 4,
};

// Goon Image if exists
const goon_img_element = document.getElementById("goon_img");
if (goon_img_element){
    let weight_total = 0;
    let image_weight_locations = {}

    for (const [key, value] of Object.entries(goon_image_names)) {
        weight_total += value;
        image_weight_locations[key] = weight_total;
    };

    let chosen_image = ""
    const chosen_weight = randomInt(0, weight_total)
    for (const [key, value] of Object.entries(image_weight_locations)) {
        if (value >= chosen_weight) {
            chosen_image = key;
            break;
        }
    }

    goon_img.src = goon_image_locations + chosen_image;
}

// <-- Games -->
// All available games
const game_images = "img/games/"
const games = {
    'Volley Random': [
        'volleyrandom.png',
        'https://volley-random.gitlab.io/file/',
    ],
    'Level Devil': [
        'leveldevil.png',
        'https://jamestore214.github.io/g22/class-356/',
    ],
    'Retro Bowl': [
        'retrobowl.png',
        'https://jamestore214.github.io/g5/class-400/',
    ],
    'Poly Track': [
        'polytrack.png',
        'https://htmlunblockedgames.github.io/pt0.5.2/',
    ],
    'Bit Life': [
        'bitlife.png',
        'https://mc0825.github.io/g5/class-441/',
    ],
    'Space Waves': [
        'spacewaves.png',
        'https://jasongamesdev.github.io/space-waves/',
    ],
    'Flappy Bird': [
        'flappybird.png',
        'https://flappybirdonline.gitlab.io/file/',
    ],
    'Swerve': [
        'swerve.png',
        'https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/VecAxR3e/index.html',
    ]
}

// If on game website and game-container exists
const game_container = document.getElementById("game-container")
if (current_href.includes('games.html') && game_container) {
    for (const [key, value] of Object.entries(games)) {
        game_container.innerHTML += `
        <button onclick="play('${value[1]}')" type="button">
            <h2>${key}</h2>
            <img src="${game_images + value[0]}" class="item game-img" alt="${key}">
        </button>`
    }
}