//min1 
// const year = prompt("Введіть свій вік")


// if (year>=0 && year<=11) {
//     alert('Ви дитина');
// } 
// else if (year>=12 && year <=17) {
//     alert('Ви підліток')
// }
// else if (year >=18 && year <=59) {
//     alert('Ви дорослі')
// }
// else if (year>=60 && year <=122) {
//     alert('Ви пенсіонер')
// }
// else {
//     alert('Ви живий?')
// }

// // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// const num = prompt("Введіть число від 0 до 9")

// switch (num) {
//     case '0':
//         alert(')');
//         break;
//     case '1':
//         alert('!');
//         break;
//     case '2':
//         alert('@');
//         break;
//     case '3':
//         alert('#');
//         break;
//     case '4':
//         alert('$');
//         break;
//     case '5':
//         alert('%');
//         break;
//     case '6':
//         alert('^');
//         break;
//     case '7':
//         alert('&');
//         break;
//     case '8':
//         alert('*');
//         break;
//     case '9':
//         alert('(');
//         break;
//     default:
//         alert('Ви ввели не число від 0 до 9');
// }         

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

// const rangeStart = +prompt("Введіть початок діапазону");
// const rangeEnd = +prompt("Введіть кінець діапазону");

// let sum = 0
// for (let i = rangeStart; i <= rangeEnd; i++) {
//     sum = sum + i
// }
// console.log("Sum: ", sum)


// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

// const firstNum = prompt('Input first number');
// const secondNum = prompt('Input second number');
// let maxNum = Math.max(firstNum, secondNum);

// for (let i = maxNum; i > 0; i--) {

//     if (firstNum % i === 0 && secondNum % i === 0) {
//         console.log('Найбільший спільний дільник: ', i);
//         break;
//     }
// }

// Запитай у користувача число і виведи всі дільники цього числа.

// const num = prompt('Input number');
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         console.log('Дільник: ', i);
//     }
// }

// Норма

// // Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// const num = prompt('Input five-digit number');
// if (num.length === 5) {
//     if (num[0] === num[4] && num[1] === num[3]) {
//         console.log('Число є паліндромом');
//     } else {
//         console.log('Число не є паліндромом');
//     }
// } else {
//     console.log('Ви ввели не п’ятирозрядне число');
// }

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

// const amount = prompt('Введіть суму покупки плес')
// if (amount >= 200 && amount <= 300) {
//     alert(amount - (amount * 0.03))
// }
// if (amount >= 300 && amount <= 500) {
//     alert(amount - (amount * 0.05))
// }
// if (amount >= 500) {
//     alert(amount - (amount * 0.07))
// }


// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

// const totalNumbers = 10;
// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < totalNumbers; i++) {
//     const userInput = prompt('Введіть число');
//     if (userInput > 0) {
//         positiveCount++;
//     }
//     if (userInput < 0) {
//         negativeCount++;
//     }
//     if (userInput == 0) {
//         zeroCount++;
//     }
//     if (userInput % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }
// console.log('Кількість додатніх чисел: ', positiveCount);
// console.log('Кількість від’ємних чисел: ', negativeCount);
// console.log('Кількість нулів: ', zeroCount);
// console.log('Кількість парних чисел: ', evenCount);
// console.log('Кількість непарних чисел: ', oddCount);


// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

// const daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота', 'Неділя'];
// let currentDayIndex = 0;
// let userResponse
// do {
//     userResponse = confirm(`${daysOfWeek[currentDayIndex]}. Хочеш побачити наступний день?`);
//     if (currentDayIndex === 6)
//         currentDayIndex = 0
//     else { currentDayIndex++ }
// } while (userResponse === true);

// Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

// const yourNumber = prompt('Загадайте число от 0 до 100');
// let min = 0;
// let max = 100;
// let guess = false;
// let userResponse;

// while (!guess) {
//     let mid = Math.floor((min + max) / 2)
//     userResponse = confirm('Is it your number?', mid)
//     if (userResponse === true) {
//         guess = true;
//         break;
//     }
//     else {
//         const isNumLess50 = prompt('Чи ваше число менше 50?')
//         if (isNumLess50 === true) {
//             min = 0;
//             max = 50;
//             mid = Math.floor((min + max) / 2)
//             userResponse = confirm('Is it your number?', mid)
//             if (userResponse === true) {
//                 guess = mid;
//                 break;
//             }
//         }
//     }
// }

// let guess = false;
// let from = 0;
// let to = 100;
// let middle = Math.floor(to - from) / 2
// while (!guess) {
//     const answer = prompt(`Ваше число > ${middle}, < ${middle} або == ${middle}?`)
//     // if (answer === '>' || answer === '<' || answer === '=') {
//     if (['>', '<', '='].includes(answer)) {
//         if (answer === 'null') break
//         if (answer === '=') {
//             guess = true;
//             alert('Your numver is: ${middle}')
//         }
//         if (answer === '>') {
//             from = middle;
//         }
//         if (answer === '<') {
//             to = middle;
//         }
//     }
//     else {
//         alert('Incorrect symbol')
//     }
// }
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

// const multiplicationTable = [];
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         multiplicationTable.push(`${i} x ${j} = ${i * j}`);
//     }
// }
// console.log(multiplicationTable);

// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

// const day = prompt('Введіть день');
// const month = prompt('Введіть місяць');
// const year = prompt('Введіть рік');

// const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const curDay = prompt('Введіть день');
const curMonth = prompt('Введіть місяць');
const curYear = prompt('Введіть рік');

function calcNextDay(day, month, year) {

    let nextDay = +day + 1,
        nextMonth = month,
        nextYear = year
    switch (month) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            if (nextDay == 32) {
                nextDay = 1;
                nextMonth = +month + 1
            }
    }
    switch (month) {
        case '4':
        case '6':
        case '9':
        case '11':
            if (nextDay == 31) {
                nextDay = 1;
                nextMonth = +month + 1
            }
    }
    if (month === '2') {
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        const daysInFebruary = isLeapYear ? 29 : 28;
        if (nextDay > daysInFebruary) {
            nextDay = 1;
            nextMonth = +month + 1
        }
    }
    if (nextMonth == 13) {
        nextMonth = 1;
        nextYear = +year + 1
    }
    console.log(`Наступна дата: ${nextDay}/${nextMonth}/${nextYear}`);
}
calcNextDay(curDay, curMonth, curYear)
