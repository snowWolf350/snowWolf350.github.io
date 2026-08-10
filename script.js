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