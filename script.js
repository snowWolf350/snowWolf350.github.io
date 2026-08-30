// =========================================
// PROJECT CAROUSEL
// =========================================

function scrollCarousel(id, direction) {

    // Find the carousel
    const carousel = document.getElementById(id);

    // Get the width of one project
    const amount = carousel.clientWidth;

    // Move one project left or right
    carousel.scrollBy({
        left: amount * direction,
        behavior: "smooth"
    });

}

// =========================================
// SCROLL-IN ANIMATION
// =========================================

const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.25
    }
);


projectCards.forEach((card) => {

    observer.observe(card);

});
// =========================================
// BACKGROUND MUSIC
// =========================================

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;


// Play / pause music

musicButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicButton.querySelector(".music-icon").classList.remove("muted");
    } else {
        music.pause();
        musicButton.querySelector(".music-icon").classList.add("muted");
    }
});
const buttonSfx = document.getElementById("buttonSfx");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        buttonSfx.currentTime = 0;
        buttonSfx.play();
    });
});
