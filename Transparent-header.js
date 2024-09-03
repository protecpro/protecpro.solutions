// script.js

var header = document.getElementById("header");

header.addEventListener("mouseenter", function() {
    header.classList.remove("transparent");
});

header.addEventListener("mouseleave", function() {
    header.classList.add("transparent");
});
