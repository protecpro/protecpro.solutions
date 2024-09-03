// script.js

var header = document.getElementById("header");
var imageContainer = document.getElementById("image-container");

header.addEventListener("mouseenter", function() {
    header.classList.remove("transparent");
});

header.addEventListener("mouseleave", function() {
    header.classList.add("transparent");
});

window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var fadeStart = 150; // Start fading at this scroll position
    var fadeEnd = 300;  // Fully fade out by this scroll position
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
