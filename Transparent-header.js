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
    const totalSlides = slides.length;
    const slideInterval = 3000; // Interval for automatic slide transition (in milliseconds)

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        }
        if (index < 0) {
            currentIndex = totalSlides - 1;
        }

        // Update slide position
        const offset = -currentIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

        // Update active link
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[currentIndex].classList.add('active');
    }

    function nextSlide() {
        currentIndex++;
        showSlide(currentIndex);
    }

    function previousSlide() {
        currentIndex--;
        showSlide(currentIndex);
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
    document.querySelector('.next').addEventListener('click', () => nextSlide());
    document.querySelector('.prev').addEventListener('click', () => previousSlide());

    // Automatic slide transition
    let autoSlideInterval = setInterval(nextSlide, slideInterval);

    // Optional: Reset the interval if user manually changes slides
    document.querySelectorAll('.next, .prev').forEach(button => {
        button.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, slideInterval);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.slides');
    let startX = 0;
    let endX = 0;

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        endX = event.touches[0].clientX;
    }

    function handleTouchEnd() {
        const threshold = 50; // Minimum distance in pixels to consider it a swipe
        const swipeDistance = endX - startX;

        // Swipe left (next slide)
        if (swipeDistance < -threshold) {
            nextSlide();
        }
        // Swipe right (previous slide)
        else if (swipeDistance > threshold) {
            previousSlide();
        }
    }

    // Attach touch event listeners to the slider container
    slidesContainer.addEventListener('touchstart', handleTouchStart, false);
    slidesContainer.addEventListener('touchmove', handleTouchMove, false);
    slidesContainer.addEventListener('touchend', handleTouchEnd, false);

    // JavaScript code for the next/previous slide functions
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    function previousSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        showSlide(currentIndex);
    }

    function showSlide(index) {
        const offset = -index * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }
});
