let bxMenu = document.querySelector(" .bx-menu");
let links = document.querySelector(".links");
let close = document.querySelector(".close");
bxMenu.addEventListener("click", () => {
  links.classList.add("active");
  if (bxMenu.classList.contains("bx-menu")) {
    bxMenu.classList.replace("bx-menu", "bx-x");
  } else {
    bxMenu.classList.replace("bx-x", "bx-menu");
  }
});
close.addEventListener("click", () => {
  links.classList.remove("active");
});

// header
window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("active", scrollY > 100);
});
// add and remove links in navbar
let section = document.querySelectorAll("section");
let navList = document.querySelectorAll(".navList .navItem");

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY,
      offset = sec.offsetTop - 90,
      height = sec.offsetHeight,
      id = sec.getAttribute("id");
    if (top > offset && top < height + offset) {
      document
        .querySelector(".navList .navItem a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navList .navItem a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
};
window.addEventListener("scroll", () => {
  function getSpaceBetweenTopElement() {
    let elements = document.querySelectorAll(".animation_heading");
    elements.forEach(element => {
      let rect = element.getBoundingClientRect();
      let space = rect.y;
      if (space < 600) {
        element.style.opacity = "1";
        element.classList.add("animate__bounceInLeft");
      }
    });
  }
  getSpaceBetweenTopElement();
});

// service
window.addEventListener("scroll", () => {
  function getSpaceBetweenTopElement() {
    let elements = document.querySelectorAll(".allBoxService .box");
    elements.forEach(element => {
      let rect = element.getBoundingClientRect();
      let space = rect.y;
      if (space < 600) {
        element.style.opacity = "1";
        element.classList.add("animate__bounce");
      }
    });
  }
  getSpaceBetweenTopElement();
});
//team
window.addEventListener("scroll", () => {
  function getSpaceBetweenTopElement() {
    let elements = document.querySelectorAll(".allBoxTeam .box");
    elements.forEach(element => {
      let rect = element.getBoundingClientRect();
      let space = rect.y;
      if (space < 600) {
        element.style.opacity = "1";
        element.classList.add("animate__bounce");
      }
    });
  }
  getSpaceBetweenTopElement();
});

// swiper
var swiper = new Swiper(".mySwiper", {
  speed: 400,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
