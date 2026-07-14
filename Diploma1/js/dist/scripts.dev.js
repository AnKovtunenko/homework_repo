"use strict";

var necklaces = [{
  photo: "./assets/images/item-1.png",
  price: "500",
  name: "Forest"
}, {
  photo: "./assets/images/item-2.png",
  price: "500",
  name: "Candy"
}, {
  photo: "./assets/images/item-3.png",
  price: "400",
  name: "Sea"
}, {
  photo: "./assets/images/item-4.png",
  price: "400",
  name: "Grape"
}, {
  photo: "./assets/images/item-5.png",
  price: "400",
  name: "Murmaid"
}, {
  photo: "./assets/images/item-6.png",
  price: "500",
  name: "Berry"
}, {
  photo: "./assets/images/item-7.png",
  price: "500",
  name: "Turquise"
}];
var container = document.getElementById("necklaces");
necklaces.forEach(function (item) {
  container.innerHTML += "<div class=\"card\">\n         <img src=\"".concat(item.photo, "\" alt=\"").concat(item.name, "\" style=\"width: 300px\">\n           <div class=\"info\">\n             <h3>").concat(item.name, "</h3>\n             <p>").concat(item.price, " \u0433\u0440\u043D</p>\n          </div>\n         </div>");
});
$(document).ready(function () {
  $(".autoplay").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  });
});