const typed = new Typed(".text", {
    strings: ["  Web Developer", "  Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});


const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar a');
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
