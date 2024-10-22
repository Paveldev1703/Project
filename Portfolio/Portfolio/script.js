document.querySelectorAll('.comparison-container').forEach(container => {
    const slider = container.querySelector('.slider');
    const afterImage = container.querySelector('.comparison-image.after');

    const updateSlider = (event) => {
        const containerRect = container.getBoundingClientRect();
        const x = event.clientX - containerRect.left; // Позиция курсора в пределах контейнера
        const percentage = Math.min(Math.max(x / containerRect.width, 0), 1); // Ограничение от 0 до 1
        
        slider.style.left = `${percentage * 100}%`; // Положение слайдера
        afterImage.style.clipPath = `inset(0 ${100 - percentage * 100}% 0 0)`; // Обновление clip-path
    };

    container.addEventListener('mousemove', updateSlider);
    container.addEventListener('touchmove', updateSlider); // Для мобильных устройств

    // Опционально: обработка события для начала перетаскивания слайдера
    slider.addEventListener('mousedown', (event) => {
        event.preventDefault(); // предотвращаем выделение текста
        const onMouseMove = (e) => {
            updateSlider(e);
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    // Для поддержки сенсорных устройств
    slider.addEventListener('touchstart', (event) => {
        event.preventDefault();
        updateSlider(event.touches[0]);
        const onTouchMove = (e) => {
            updateSlider(e.touches[0]);
        };

        const onTouchEnd = () => {
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        };

        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
    });
});

//Menu
document.getElementById("menu-button").addEventListener("click", function() {
    const dropdown = document.getElementById("dropdown");
    // Проверяем, скрыто ли выпадающее меню
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"; // Скрываем меню
    } else {
        dropdown.style.display = "block"; // Показываем меню
    }
});

// Закрываем меню при клике вне его
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        const dropdown = document.getElementById("dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none"; // Скрываем меню
        }
    }
}

// Открытие и закрытие меню при нажатии на кнопку
document.getElementById("menu-button").addEventListener("click", function() {
    const menu = document.getElementById("menu-container");
    menu.classList.toggle("active"); // Переключение класса для показа меню
});
