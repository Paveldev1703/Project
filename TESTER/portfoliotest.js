// Select all sections and navigation items
const sections = document.querySelectorAll(".hero");
const navItems = document.querySelectorAll(".nav li");

// Add scroll event listener
window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = index;
        }
    });

    // Highlight the correct nav item
    navItems.forEach((item) => {
        item.classList.remove("active");
    });

    if (currentSection !== "") {
        navItems[currentSection].classList.add("active");
    }
});
