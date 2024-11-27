// Hiding header and navbar
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
      const header = document.getElementById("hidingHeader");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          header.style.top = "-70px";
      } else {
          header.style.top = "0";
      }
  }
});

// Scroll Text 
const scrollText = document.querySelector('.scroll-text');


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        scrollText.classList.add('hidden');
    } else {
        scrollText.classList.remove('hidden');
    }
});
























// Slider

// const slider = document.getElementById('slider');
//     const prev = document.getElementById('prev');
//     const next = document.getElementById('next');
//     const images = slider.children;
//     const totalImages = images.length;
//     let index = 0;

//     function updateSlider() {
//       const offset = -index * 100; // Calculate the offset for the current image
//       slider.style.transform = `translateX(${offset}%)`;
//     }

//     next.addEventListener('click', () => {
//       index = (index + 1) % totalImages; // Loop back to the start
//       updateSlider();
//     });

//     prev.addEventListener('click', () => {
//       index = (index - 1 + totalImages) % totalImages; // Loop back to the end
//       updateSlider();
//     });

// Slider
