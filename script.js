const navbar = document.getElementById("navbar");

// Change navbar color on scroll
window.addEventListener("scroll", ()=>{
    navbar.classList.toggle("scrolled", window.scrollY > 50)
});

// Toggle mobile menu (optional future enhancement)
