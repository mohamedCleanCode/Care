let total = document.querySelector(".total");
let arr = [];
let sum = 0;
window.onload = function () {
  fetch("http://localhost:9000/products")
    .then((res) => res.json())
    .then((data) => {
      let cartCunter = document.querySelector(".cart-counter span");
      cartCunter.innerHTML = data.length;
      let tbody = document.querySelector("tbody");
      if (data.length === 0) {
        tbody.appendChild(
          document.createTextNode("There is now products to show in!")
        );
      } else {
        for (let i = 0; i < data.length; i++) {
          let tr = document.createElement("tr");
          tr.innerHTML = `
<td><i class="fa-regular fa-circle-xmark"></i></td>
<td><img src=${data[i].imgSrc} alt=" "></td>
<td>${data[i].headingProduct}</td>
<td class="price-of-product">$${data[i].priceProduct}</td>
<td><input class="number-of-piece" tybe="number" value="${
            data[i].numbers
          }"></td>
<td class="sub-total">$${data[i].numbers * data[i].priceProduct}</td>`;
          tbody.appendChild(tr);
        }
      }
    });
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("number-of-piece")) {
    let next = e.target.parentElement.nextElementSibling;
    let pervious =
      e.target.parentElement.previousElementSibling.innerHTML.slice(1);
    e.target.addEventListener("input", function (e) {
      next.innerHTML = `$${+e.target.value * +pervious}`;
    });
  }
});

setTimeout(function () {
  let subTotal = document.querySelectorAll(".sub-total");
  subTotal.forEach((el) => {
    arr.push(+el.innerHTML.slice(1));
  });
  arr.forEach((el) => {
    sum += el;
  });
  total.innerHTML += `$${sum}`;
}, 1000);
