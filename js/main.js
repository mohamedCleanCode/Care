// [1] Logic Of Index Page
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

// Logic Of Shop Page
let productImage = document.querySelectorAll(".product-shop");
productImage.forEach((product) => {
  product.addEventListener("click", (e) => {
    window.location.href = "product-details.html";
  });
});

// Logic Of Details Page
let mainImage = document.querySelector(".main-image");
let smallImgs = document.querySelectorAll(".small-image img");
smallImgs.forEach((image) => {
  image.addEventListener("click", (e) => {
    mainImage.src = e.target.src;
  });
});

