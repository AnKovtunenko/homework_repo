"use strict";

//p1-1
var a = 0.1;
var b = 0.2;
var sum = (a + b).toFixed(1);
console.log('Sum =', sum); //p1-2

var a1 = '1';
var b1 = 2;
var sum1 = Number(a1) + b1;
console.log('Sum =', sum1); //p1-3

var fileSize = 820;
var storagesSizeInGb = prompt('Enter size of flash storage (in GB):');
var storagesSizeInMb = Number(storagesSizeInGb) * 1024;
console.log('Number of files that can be stored:', Math.floor(storagesSizeInMb / fileSize)); //norm-1

var moneyAmount = prompt('Enter money amount');
var chocolatePrice = prompt('Enter choco price');
console.log('Amount of chocolates:', Math.floor(moneyAmount / chocolatePrice));
console.log('Money left:', moneyAmount % chocolatePrice); //norm-2

var number3 = prompt('Enter 3 digits');

if (number3.length !== 3) {
  alert('Please enter 3 digits');
} else {
  var reversedNumber = number3.split('').reverse().join('');
  alert("Reversed number: ".concat(reversedNumber));
}

max - 1;
var deposit = prompt('Enter amount of deposit for 2 months');
var interestRate = 0.05;
var interest = deposit * interestRate;
var totalAmount = Number(deposit) + interest;
alert("Amount of money after 2 months: ".concat(totalAmount)); // 2 && 0 && 3 виведеться 0
//  2 || 0 || 3 виведеться 2 
// 2 && 0 || 3 виведеться 3