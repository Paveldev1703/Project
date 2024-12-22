const sections = document.querySelectorAll("section");
const sideMenu = document.querySelectorAll("#side-menu li");

let currentSectionIndex = 0; // Начальная секция

// Плавный переход к секции
function scrollToSection(index) {
    const targetSection = sections[index];
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        updateActiveSection(index);
    }
}

// Обновление активного индикатора в меню
function updateActiveSection(index) {
    sideMenu.forEach((item, i) => {
        if (i === index) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
    currentSectionIndex = index;
}

// Обработчик прокрутки мыши
document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        // Прокрутка вниз
        if (currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        }
    } else {
        // Прокрутка вверх
        if (currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    }
});

// Переход к секции при клике в меню
sideMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
        scrollToSection(index);
    });
});

// Инициализация
scrollToSection(currentSectionIndex);
