// script.js

var header = document.getElementById("header");
var imageContainer = document.getElementById("image-container");

header.addEventListener("mouseenter", function() {
    header.classList.remove("transparent");
});

header.addEventListener("mouseleave", function() {
    header.classList.add("transparent");
});

// script.js

window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var viewportHeight = window.innerHeight;

    var fadeStart = viewportHeight * 0.1;  // Start fading at 10% of viewport height
    var fadeEnd = viewportHeight * 0.5;    // Fully fade out at 50% of viewport height
    var opacity;

    if (scrollPosition <= fadeStart) {
        opacity = 1; // Fully visible
    } else if (scrollPosition >= fadeEnd) {
        opacity = 0; // Fully transparent
    } else {
        opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart); // Calculate opacity based on scroll position
    }

    imageContainer.style.opacity = opacity;
});

// Ensure the transition is recalculated on resize (orientation change)
window.addEventListener("resize", function() {
    var scrollPosition = window.scrollY;
    var viewportHeight = window.innerHeight;

    var fadeStart = viewportHeight * 0.1;
    var fadeEnd = viewportHeight * 0.5;
    var opacity;

    if (scrollPosition <= fadeStart) {
        opacity = 1;
    } else if (scrollPosition >= fadeEnd) {
        opacity = 0;
    } else {
        opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
    }

    imageContainer.style.opacity = opacity;
});

