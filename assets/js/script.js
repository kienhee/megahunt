// handle menu mobile
let iconMenu = document.querySelectorAll(".menu-icon-mobile");
let menu = document.getElementById("header__menu");
let overlay = document.getElementById("overlay");
let header = document.getElementById("header");
iconMenu.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("header__active");
    overlay.classList.toggle("overlay-show");
  });
});
// handle scroll navbar
if (window.outerWidth >= 1024) {
  let currentURL = window.location.pathname;
  if (currentURL == "/" || currentURL.includes("index")) {
    header.style.top = "-10%";
    header.style.opacity = "0";
  }
  window.addEventListener("scroll", function () {
    if (currentURL == "/" || currentURL.includes("index")) {
      if (window.scrollY > 150) {
        header.style.top = "0";
        header.style.opacity = "1";
      } else {
        header.style.top = "-10%";
        header.style.opacity = "0";
      }
    } else {
      if (window.scrollY > 150) {
        header.style.top = "0";
        header.style.opacity = "1";
      }
    }
  });
}

// Back to top button
window.addEventListener("scroll", function () {
  var backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

document.querySelector(".back-to-top").addEventListener("click", function () {
  var scrollOptions = {
    top: 0,
    behavior: "smooth",
  };
  window.scrollTo(scrollOptions);
});

// Project and Testimonial carousel
$(".blog__home-carousel, .testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  margin: 25,
  loop: true,
  center: true,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
