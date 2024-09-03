// script.js

var header = document.getElementById("header");
var menuIcon = document.getElementById("menu-icon");
var navMenu = document.getElementById("nav-menu");
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

// Toggle menu visibility on mobile
menuIcon.addEventListener("click", function() {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
});

// Ensure the transition is recalculated on resize (orientation change)
window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        navMenu.style.display = "flex"; // Show menu on desktop
    } else {
        navMenu.style.display = "none"; // Hide menu on mobile
    }
});

