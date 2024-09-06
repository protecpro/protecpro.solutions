let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    }
    if (index < 0) {
        currentIndex = totalSlides - 1;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function plusSlides(n) {
    currentIndex += n;
    showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);

// Function to jump to a specific slide when a navigation link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const slideIndex = parseInt(this.getAttribute('data-slide')); // Get the target slide index
        currentIndex = slideIndex; // Set the current index to the clicked slide
        showSlide(currentIndex); // Show the selected slide
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar .nav-item');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        }
        if (index < 0) {
            currentIndex = slides.length - 1;
        }

        const offset = -currentIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

        // Update active link
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[currentIndex].classList.add('active');
    }

    // Initialize the first slide and highlight the first nav item
    showSlide(currentIndex);

    // Handle navigation link clicks
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            currentIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(currentIndex);
        });
    });

    // Example for next/prev buttons
    function plusSlides(n) {
        currentIndex += n;
        showSlide(currentIndex);
    }

    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
});
