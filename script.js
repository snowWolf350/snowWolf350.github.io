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