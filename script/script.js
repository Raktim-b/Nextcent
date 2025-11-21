document.addEventListener("DOMContentLoaded", () => {
  luxy.init({
    wrapper: "#luxy",
    targets: ".luxy-el",
    wrapperSpeed: 0.08,
  });
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
  function countUp(el) {
    let target = +el.getAttribute("data-target");
    let count = 0;

    let speed = target / 200; // lower = slower

    let update = () => {
      count += speed;
      if (count < target) {
        el.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        el.innerText = target + "+";
      }
    };
    update();
  }

  document.querySelectorAll(".stat-number").forEach((num) => {
    num.setAttribute(
      "data-target",
      num.innerText.replace("+", "").replace(",", "")
    );
    countUp(num);
  });
});
