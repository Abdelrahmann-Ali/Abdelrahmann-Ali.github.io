document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector("nav");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(10, 25, 47, 0.95)";
            navbar.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        } else {
            navbar.style.background = "rgba(10, 25, 47, 0.9)";
            navbar.style.boxShadow = "none";
        }
    });

    // Button Hover Sound Effect (Optional)
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            const audio = new Audio("hover-sound.mp3"); // Replace with your own sound file
            audio.play();
        });
    });
});
