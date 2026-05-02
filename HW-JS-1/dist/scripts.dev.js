"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//norm-1
var name = prompt('Як тебе звати?');
console.log(_typeof(name));

if (name.length < 3) {
  alert('Вкажи справжнє імʼя!');
} else {
  alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(name, "!"));
} //norm-2


var year = prompt('Якого ти року народження?');

if (year) {
  var age = 2026 - year;
  alert("\u0422\u043E\u0431\u0456 ".concat(age, " \u0440\u043E\u043A\u0456\u0432!"));
} //norm-3


var sideLength = prompt('Введи довжину сторони квадрата:');

if (sideLength) {
  var area = Math.pow(sideLength, 2);
  alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 = ".concat(area));
}

var perimets = 4 * sideLength;
alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 = ".concat(perimets)); //max-1

var radius = prompt('Введи радіус кола:');

if (radius) {
  var _area = Math.PI * Math.pow(radius, 2);

  alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430 = ".concat(_area));
} //max-2


var distance = prompt('Введи відстань між містами (км):');
var time = prompt('Введи час, за який хочеш дістатися (години):');
var speed = distance / time;
alert("\u0422\u043E\u0431\u0456 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0457\u0445\u0430\u0442\u0438 \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(speed, " \u043A\u043C/\u0433\u043E\u0434!")); //max-3

var hryvnia = prompt('Введіть суму в гривнях:');
var exchangeRate = 0.023;
var dollars = hryvnia * exchangeRate;
alert("\u0412\u0456\u0442\u0430\u044E, \u0443 \u0442\u0435\u0431\u0435 ".concat(dollars, " \u0434\u043E\u043B\u0430\u0440\u0456\u0432!"));
/* 
MANY
LINES
COMMENT
*/
//DWQDESVEW