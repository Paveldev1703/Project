document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".navigation li");
  
    // Scroll to section when clicking a nav item
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
  
        // Scroll to the section
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Update active nav item on scroll
    window.addEventListener("scroll", () => {
      let currentSection = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - section.offsetHeight / 2) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("data-target") === currentSection) {
          item.classList.add("active");
        }
      });
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = 0;
  
    const scrollToSection = (index) => {
      if (index < 0 || index >= sections.length) return;
  
      sections[index].scrollIntoView({
        behavior: "smooth",
      });
      currentSectionIndex = index;
    };
  
    // Обработка колеса мыши
    let isScrolling = false;
    window.addEventListener("wheel", (event) => {
      if (isScrolling) return;
  
      isScrolling = true;
      if (event.deltaY > 0) {
        scrollToSection(currentSectionIndex + 1); // Скролл вниз
      } else {
        scrollToSection(currentSectionIndex - 1); // Скролл вверх
      }
  
      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Пауза между скроллами
    });
  
    // Обработка стрелок на клавиатуре
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        scrollToSection(currentSectionIndex + 1);
      } else if (event.key === "ArrowUp") {
        scrollToSection(currentSectionIndex - 1);
      }
    });
  });
  
  