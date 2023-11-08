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
