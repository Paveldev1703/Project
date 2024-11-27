const container = document.querySelector('.menu-container');
const menuItems = document.querySelectorAll('.menu-item');

container.addEventListener('mouseenter', () => {
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = `translate(${Math.sin((index / menuItems.length) * Math.PI * 2) * 100}px, 
                                       ${Math.cos((index / menuItems.length) * Math.PI * 2) * 100}px)`;
    }, index * 100); // Задержка появления
  });
});

container.addEventListener('mouseleave', () => {
  menuItems.forEach((item) => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0) translate(-50%, -50%)';
  });
});