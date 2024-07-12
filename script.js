// Nav bar for mobile devices
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        if (navMenu.classList.contains("show")) {
            navMenu.style.maxHeight = "0";
            navMenu.style.opacity = "0";
            setTimeout(() => {
                navMenu.classList.remove("show");
            }, 500); // Match this duration with the CSS transition duration
        } else {
            navMenu.classList.add("show");
            navMenu.style.maxHeight = "500px"; // Adjust this value based on the number of items in the menu
            navMenu.style.opacity = "1";
        }
        hamburger.classList.toggle("is-active");
    });
});

// Animation for home section
document.addEventListener("DOMContentLoaded", function() {
    const h3 = document.querySelector("#home .text-container h3");
    const h1 = document.querySelector("#home .text-container h1");
    const h2 = document.querySelector("#home .text-container h2");
    const btn = document.querySelector(".work-info button");

    btn.classList.add("fade-in");
    h3.classList.add("fade-in");
    h1.classList.add("fade-in");
    h2.classList.add("fade-in");
});

// Music Animation
var playButton = document.getElementById('play-img');
var audio = document.getElementById('audio');
var songTitle = document.getElementById('song-title');

var songs = [
    { src: "Madcon ft Ray Dalton - Don't Worry (lyrics).mp3", title: "Don't Worry" },
    { src: "Sabrina Carpenter - Espresso (Lyrics).mp3", title: "Espresso" }
];

var currentSongIndex = 0;

function playSong(index) {
    if (index < songs.length) {
        audio.src = songs[index].src;
        songTitle.textContent = songs[index].title;
        audio.play();
        playButton.src = "https://img.icons8.com/?size=40&id=61012&format=png&color=000000"; 
    }
}

playButton.addEventListener('click', function() {
    if (audio.paused) {
        playSong(currentSongIndex);
    } else {
        audio.pause();
        playButton.src = "https://img.icons8.com/?size=40&id=99cTBfGlewZU&format=png&color=000000";
        songTitle.textContent = "Paused";
    }
});

audio.addEventListener('ended', function() {
    currentSongIndex++;
    if (currentSongIndex < songs.length) {
        playSong(currentSongIndex);
    } else {
        currentSongIndex = 0; 
        playButton.src = "https://img.icons8.com/?size=40&id=99cTBfGlewZU&format=png&color=000000";
        songTitle.textContent = "Paused";
    }
});



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const aboutSection = document.getElementById('about');
    const elementsToAnimate = aboutSection.querySelectorAll('h2, .info-container, .slider, .about-doodles');

    elementsToAnimate.forEach(element => {
        if (isInViewport(element)) {
            element.style.animation = 'fadeInUp 1s ease forwards';
        } else {
            element.style.animation = 'slideUp 1s ease forwards';
        }
    });
}
window.addEventListener('scroll', handleScroll);
handleScroll();










