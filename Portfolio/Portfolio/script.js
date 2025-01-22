

// preloader
document.addEventListener("DOMContentLoaded", () => {
  const loadingProgress = document.querySelector(".loading-progress");
  const loadingScreen = document.getElementById("loading-screen");

  let progress = 0;

  const interval = setInterval(() => {
    progress += 20;
    loadingProgress.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.style.opacity = "0";
        setTimeout(() => loadingScreen.remove(), 500);
      }, 500);
    }
  }, 500);
});

// Expirience 
function updateExperienceCounter() {
  const startDate = new Date("2023-01-01"); // Укажите дату начала вашей карьеры
  const now = new Date();
  const diffTime = Math.abs(now - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("experience-days").textContent = diffDays;
}

updateExperienceCounter();




// Time
function updateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  document.getElementById("time").textContent = `Time: ${formattedTime}`;
}
setInterval(updateTime, 1000);








// Language change
const greetings = {
  en: "Hello",
  es: "¡Hola",
  fr: "Bonjour",
  de: "Hallo",
  ru: "Привет",
  it: "Ciao",
  no: "Hei"


};

// Language change
function changeGreeting() {
  const langCodes = Object.keys(greetings);
  const randomLang = langCodes[Math.floor(Math.random() * langCodes.length)];
  const greetingText = greetings[randomLang];
  document.getElementById("greeting").textContent = greetingText;
}

// Change the greeting every 5 seconds
changeGreeting();
setInterval(changeGreeting, 5000);







// Scroll Text 
window.addEventListener("scroll", function () {
    const heroContent = document.getElementById("hero-content");

    // Если пользователь прокрутил больше 50px
    if (window.scrollY > 50) {
        heroContent.classList.add("hidden"); // Добавляем класс, чтобы скрыть текст
    } else {
        heroContent.classList.remove("hidden"); // Убираем класс, чтобы вернуть текст
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".navigation li");
    const sliderIndicator = document.querySelector(".slider-indicator");
  
    let currentSectionIndex = 0;
    let isScrolling = false;
  
    // Функция для перехода к секции
    const scrollToSection = (index) => {
      if (index < 0 || index >= sections.length) return;
  
      sections[index].scrollIntoView({
        behavior: "smooth",
      });
      updateActiveNav(index);
      currentSectionIndex = index;
    };
  
    // Обновление активного элемента навигации и индикатора
    const updateActiveNav = (index) => {
      navItems.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
  
      // Двигаем индикатор ползунка
      const indicatorHeight = 100 / sections.length;
      sliderIndicator.style.top = `${index * indicatorHeight}%`;
    };
  
    // Обновление текущей секции при скролле
    const updateCurrentSection = () => {
      const scrollPosition = window.scrollY;
  
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (
          scrollPosition >= sectionTop - sectionHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight / 2
        ) {
          if (currentSectionIndex !== index) {
            updateActiveNav(index);
            currentSectionIndex = index;
          }
        }
      });
    };
  

    // NavBar: клики по пунктам
    navItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        scrollToSection(index);
      });
    });
  
    // Скролл колесом мыши
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
      }, 1000);
    });
  
    // Скролл клавишами
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        scrollToSection(currentSectionIndex + 1);
      } else if (event.key === "ArrowUp") {
        scrollToSection(currentSectionIndex - 1);
      }
    });
  
    // Скролл для обновления активного элемента
    window.addEventListener("scroll", () => {
      if (!isScrolling) {
        updateCurrentSection();
      }
    });
  
    // Инициализация: активируем первый пункт навигации и индикатор
    updateActiveNav(0);
  });
  





// Project cards animation
const cards = document.querySelectorAll('.card');

// Настраиваем Intersection Observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Добавляем класс, если элемент виден
            } else {
                entry.target.classList.remove('visible'); // Убираем класс, если элемент уходит
            }
        });
    },
    {
        threshold: 0.2, // 20% элемента должно быть видно для срабатывания
    }
);

// Применяем наблюдатель ко всем карточкам
cards.forEach((card) => {
    observer.observe(card);
});














