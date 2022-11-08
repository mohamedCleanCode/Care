// [1] Logic Of Navbar
let bars = document.querySelector(".bars");
let linksDiv = document.querySelector(".header .links");

bars.onclick = function () {
  linksDiv.classList.toggle("open-links");
};

let links = document.querySelectorAll(".links li");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
