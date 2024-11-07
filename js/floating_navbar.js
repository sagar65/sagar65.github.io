window.onscroll = function() {
    const navbar = document.querySelector('.floating-navbar');
    const sticky = navbar.offsetTop;

    // Use requestAnimationFrame for smoother performance
    window.requestAnimationFrame(() => {
        if (window.pageYOffset > sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
};