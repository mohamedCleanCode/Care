// Logic Of Product Dttails

let parentImage = document.getElementById("cont");
let productImageDetails = document.createElement("div");
productImageDetails.className = "product-image-details";
let mainImage = document.createElement("img");
mainImage.className = "main-image";
mainImage.src = localStorage.getItem("imgSrc");
productImageDetails.appendChild(mainImage);
parentImage.prepend(productImageDetails);

let h1 = document.querySelector(".product-image-info h1");
h1.innerHTML = localStorage.getItem("headingProduct");
let h2 = document.querySelector(".product-image-info h2");
h2.innerHTML = localStorage.getItem("priceProduct");

let addToCart = document.querySelector(".add-to-cart");

function* generateProductInLocalStorage() {
  let index = 1;
  while (true) {
    yield index++;
  }
}
let gen = generateProductInLocalStorage();
addToCart.onclick = function () {
  let product = {
    id: gen.next().value,
    imgSrc: localStorage.getItem("imgSrc"),
    headingProduct: localStorage.getItem("headingProduct"),
    priceProduct: localStorage.getItem("priceProduct").slice(1),
    numbers: document.querySelector("input[type='number']").value,
  };
  sendData(product);
  window.location.href = "cart.html";
};

function sendData(data) {
  fetch("http://localhost:9000/products", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res)
    .then((data) => {
      if (data.status === 500) {
        console.log(500);
        addToCart.click();
      } else {
        return data.json();
      }
    });
}
