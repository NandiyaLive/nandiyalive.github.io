const home = document.querySelector('#home');
const about = document.querySelector('#about');
const works = document.querySelector('#works');

document.querySelector('.fa-home').addEventListener('click', showHome);
document.querySelector('.fa-user').addEventListener('click', showAbout);
document.querySelector('.fa-list-alt').addEventListener('click', showWorks);

function showHome() {
    about.style.display = 'none';
    works.style.display = 'none';
    home.style.display = 'block';
    document.querySelector('.fa-home').className = 'fa fa-home deco';
    document.querySelector('.fa-list-alt').className = 'fa fa-list-alt';
    document.querySelector('.fa-user').className = 'fa fa-user';
}

function showAbout(){
    home.style.display = 'none';
    works.style.display = 'none';
    about.style.display = 'block';
    document.querySelector('.fa-user').className = 'fa fa-user deco';
    document.querySelector('.fa-home').className = 'fa fa-home';
    document.querySelector('.fa-list-alt').className = 'fa fa-list-alt';
}

function showWorks(){
    home.style.display = 'none';
    about.style.display = 'none';
    works.style.display = 'block';
    document.querySelector('.fa-list-alt').className = 'fa fa-list-alt deco';
    document.querySelector('.fa-home').className = 'fa fa-home';
    document.querySelector('.fa-user').className = 'fa fa-user';
}

// Dark/Lite Mode Toggle
function modeToggle() {
    var element = document.body;
    element.classList.toggle("lite-mode");
}


// Preloader
const preloader = document.querySelector('.preloader');
const fadeEffect = setInterval(() => {
    preloader.style.display = 'none';
}, 4000);
