"use strict";

// Мінімум
// Напиши всі можливі варіанти створення функцій.
// arrow function
// function declaration
// function expression
// anonymous function
// Створи функцію, яка буде виводити кількість переданих їй аргументів.
// function argsNumber() {
//     console.log(arguments.length)
// }
// argsNumber(1, 2, 4)
// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.
// function compareNum(a, b) {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     if (a === b) {
//         return 0;
//     }
// }
// Напиши функцію, яка обчислює факторіал переданого їй числа.
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// function concatNums(a, b, c) {
//     return String(a) + String(b) + String(c);
// }
// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
// function sidesRectangle() {
//     if (arguments.length === 2) {
//         return arguments[0] * arguments[1]
//     } else {
//         return Math.pow(arguments[0], 2)
//     }
// }
// Норма
// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// const numero = prompt('Введіть число');
function isNumberPerfect(num) {
  num = Number(num);
  var sum = 0;

  if (num < 1) {
    alert('Введіть число більше 0!');
  }

  for (var i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
} // console.log(`${numero} is a ${isNumberPerfect(numero) ? 'perfect' : 'not perfect'} number!`);
// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.


var fNum = prompt('Enter 1st number!');
var lNum = prompt('Enter 2nd number!');

function perfectRange(firstNum, lastNum) {
  for (var i = firstNum; i <= lastNum; i++) {
    if (isNumberPerfect(i)) {
      console.log(i);
    }
  }
}

perfectRange(fNum, lNum);