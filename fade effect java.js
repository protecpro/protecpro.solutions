document.addEventListener('DOMContentLoaded', function() {
    var fadeElement = document.querySelector('.fade-element');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    observer.observe(fadeElement);
});
