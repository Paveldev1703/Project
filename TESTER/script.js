// Scroll indicator interaction (optional)
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  });
  

  // Получаем элементы секций и индикатора
const sections = document.querySelectorAll(".section");
const indicatorItems = document.querySelectorAll(".scroll-indicator li");

// Добавляем обработчик события прокрутки
window.addEventListener("scroll", () => {
  let currentSectionIndex = 0;

  // Проверяем, в какой секции находится пользователь
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 2) {
      currentSectionIndex = index;
    }
  });

  // Устанавливаем активный класс для текущей секции
  indicatorItems.forEach((item, index) => {
    if (index === currentSectionIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

// Добавляем плавный скроллинг при клике на индикатор
indicatorItems.forEach((item) => {
  item.addEventListener("click", () => {
    const sectionIndex = item.getAttribute("data-index") - 1;
    sections[sectionIndex].scrollIntoView({ behavior: "smooth" });
  });
});
