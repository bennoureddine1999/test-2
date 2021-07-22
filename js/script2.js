// var btnPlus = document.querySelector(".plus");
// var btnMoin = document.querySelector(".moin");
// var qty = document.querySelector(".quantite");
// var total = document.querySelector("#Total");
// var prix = document.querySelector(".prix");
// btnPlus.addEventListener("click", function () {
//   qty.innerText = parseFloat(qty.innerText) + 1;
//   total.innerText = parseFloat(total.innerText) + parseFloat(prix.innerText);
// });

// btnMoin.addEventListener("click", function () {
//   if (parseFloat(qty.innerText) > 0) {
//     qty.innerText = parseFloat(qty.innerText) - 1;
//     total.innerText = parseFloat(total.innerText) - parseFloat(prix.innerText);
//   }
// });

var container = document.querySelector(".container");
var child = document.querySelector(".child");

container.addEventListener("click", function () {
  alert("container clicked");
});

child.addEventListener("click", function (e) {
  e.stopPropagation();
  e.target.innerHTML = "Hello";
  e.target.style.color = "white";
});
