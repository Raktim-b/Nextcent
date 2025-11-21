document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-collapsed");

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navMenu.classList.toggle("nav-open");
  });

  // Swiper
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
});
