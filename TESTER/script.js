// Получаем элемент текста
const scrollText = document.querySelector('.scroll-text');

// Следим за скроллом страницы
window.addEventListener('scroll', () => {
    // Получаем положение прокрутки страницы
    const scrollPosition = window.scrollY;

    // Если прокрутка вниз больше 50px, прячем текст
    if (scrollPosition > 50) {
        scrollText.classList.add('hidden');
    } else {
        // Если возвращаемся вверх, показываем текст
        scrollText.classList.remove('hidden');
    }
});
