window.onscroll = function() {
    const navbar = document.querySelector('.floating-navbar');
    const sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
    navbar.style.top = '0'; // Adjust top position
    } else {
        navbar.classList.remove('sticky');
        navbar.style.top = '20px'; // Reset to initial position
    }
};
