const menuToggler = document.querySelector(".menu-toggle");
const body = document.querySelector("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});
