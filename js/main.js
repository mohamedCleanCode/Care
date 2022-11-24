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
let productImage = document.querySelectorAll(".product .cart");
productImage.forEach((product) => {
  product.addEventListener("click", (e) => {
    let arr = e.target.parentElement.children;
    localStorage.setItem("imgSrc", arr[0].src);
    localStorage.setItem("headingProduct", arr[1].children[1].innerHTML);
    localStorage.setItem("priceProduct", arr[1].children[3].innerHTML);
    window.location.href = "product-details.html";
  });
});

// Logic Of Cart Page
