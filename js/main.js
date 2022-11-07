// [1] Logic Of Navbar
let bars = document.querySelector(".bars");
let linksDiv = document.querySelector(".header .links");

bars.onclick = function () {
  linksDiv.classList.toggle("open-links");
};
