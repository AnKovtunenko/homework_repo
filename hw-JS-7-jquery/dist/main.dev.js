"use strict";

var guitars = [{
  image: './assets/images/item1.png',
  title: 'Hagstrom Alvar Limited Edition',
  price: '€2.990,00',
  status: 'in stock'
}, {
  image: './assets/images/item2.png',
  title: 'Hagstrom Tremar Viking Deluxe Cloudy Seas',
  price: '€1.990,00',
  status: 'in stock'
}, {
  image: './assets/images/item1.png',
  title: 'Fender Telecaster Black Paisley Limited Edition',
  price: '€2.190,00',
  status: 'in stock'
}, {
  image: './assets/images/item3.png',
  title: 'Gibson Les Paul Standard 60s',
  price: '€3.990,00',
  status: 'sold'
}, {
  image: './assets/images/item4.png',
  title: 'Suhr Standard Plus Trans Blue Denim',
  price: '€2.220,00',
  status: 'in stock'
}, {
  image: './assets/images/item1.png',
  title: 'Fender Telecaster Black Paisley Limited Edition',
  price: '€1.190,00',
  status: 'in stock'
}];
var itemWrap = document.querySelector('.item-wrap');
guitars.forEach(function (guitar) {
  itemWrap.innerHTML += "\n        <div class=\"item\">\n            <div class=\"status ".concat(guitar.status === 'sold' ? 'sold' : 'in-stock', "\">\n                ").concat(guitar.status, "\n            </div>\n            <div class=\"item-content\">\n                \n                <div class=\"photo\">\n                    <img class=\"guitar\" src=\"").concat(guitar.image, "\" alt=\"").concat(guitar.title, "\">\n                </div>\n                <div class=\"title\">\n                    ").concat(guitar.title, "\n                </div>\n                <div class=\"price\">\n                    ").concat(guitar.price, "\n                </div>\n            </div>\n        </div>\n    ");
});