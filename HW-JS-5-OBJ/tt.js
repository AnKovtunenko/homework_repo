// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const uaTranslations = {
    brand: 'Марка',
    model: 'Модель',
    color: 'Колір',
    year: 'Рік випуску',
    avgSpeed: 'Середня Швидкість',
    fuelCapacity: 'Об/ʼєм баку',
    fuelConsume: 'Середній росхід',
    drivers: 'Водії'
}

const myCar = {
    info: {
        brand: 'Lamborgini',
        model: 'Aventador',
        color: 'Yellow',
        year: 2022,
        avgSpeed: 60,
        fuelCapacity: 50,
        fuelConsume: 9,
    },
    drivers: ['Bob', 'Alice', 'John'],

    showInfo: function (elID) {
        let list = '<dl>'
        for (let prop in this.info) {
            list += `
    <dt>${uaTranslations[prop] || prop}</dt>
    <dd>${this.info[prop]}</dd>`
        }
        list += '</dl>'
        list += `<dt>${uaTranslations.drivers}</dt><dd>${this.drivers.join(', ')}</dd>`
        document.getElementById('info-list').innerHTML = list
    },
    addDriver: (name) => {
        if (myCar.drivers.includes(name)) {
            console.log(`Водій ${name} вже існує`)
        } else {
            myCar.drivers.push(name)
            console.log(`Водій ${name} доданий`)
        }

    },
    countFuel: function (distance) {
        let time = distance / this.info.avgSpeed
        // console.log('Time:', time);
        let timenBreaks = Math.floor(time / 4);
        let timeTotal
        if (time % 4 === 0) {
            timeTotal = timeTotal + timenBreaks - 1
        } else {
            timeTotal = time + timenBreaks
        }
        console.log('Total time:', Math.floor(timeTotal))
        let fuel = (distance * this.info.fuelConsume) / 100
        console.log('Fuel:', fuel)
    }
}
const userInput = prompt('Введіть імʼя водія для додавання:')
myCar.addDriver(userInput);
myCar.showInfo('info-list')

const distInput = parseFloat(prompt('Введіть відстань для розрахунку часу та палива:'))
myCar.countFuel(distInput)

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const time = {
    hours: 20,
    minutes: 59,
    seconds: 45,

    showTime: function () {
        console.log(`${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`)
    },
    addSeconds: function (sec) {
        let totalSec = this.seconds + sec + this.minutes * 60 + this.hours * 3600
        newHours = Math.floor(totalSec / 3600) % 24
        newMinutes = Math.floor((totalSec % 3600) / 60)
        newSeconds = totalSec % 60
        this.hours = newHours
        this.minutes = newMinutes
        this.seconds = newSeconds
    },
    changeMinutes: function (min) {
        let totalSec = this.seconds + (this.minutes + min) * 60 + this.hours * 3600
        newHours = Math.floor(totalSec / 3600) % 24
        newMinutes = Math.floor((totalSec % 3600) / 60)
        newSeconds = totalSec % 60
        this.hours = newHours
        this.minutes = newMinutes
        this.seconds = newSeconds
    },
    changeHours: function (hr) {
        let totalSec = this.seconds + this.minutes * 60 + (this.hours + hr) * 3600
        newHours = Math.floor(totalSec / 3600) % 24
        newMinutes = Math.floor((totalSec % 3600) / 60)
        newSeconds = totalSec % 60
        this.hours = newHours
        this.minutes = newMinutes
        this.seconds = newSeconds
    }
}
time.showTime()

const secondInput = prompt('Please add seconds')
time.addSeconds(parseInt(secondInput))
time.showTime()

const minuteInput = prompt('Please add minutes')
time.changeMinutes(parseInt(minuteInput))
time.showTime()

const hourInput = prompt('Please add hours')
time.changeHours(parseInt(hourInput))
time.showTime()

// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// Складання 2-х об'єктів-дробів.
// Віднімання 2-х об'єктів-дробів.
// Множення 2-х об'єктів-дробів.
// Ділення 2-х об'єктів-дробів.
// Скорочення об'єкта-дробу.

// function getCommonDenominator(firstNum, secondNum) {
//     let maxNum = Math.max(firstNum, secondNum);

//     for (let i = 0; i > maxNum; i++) {

//         if (firstNum % i === 0 && secondNum % i === 0) {
//             console.log('Cпільний дільник: ', i);
//             return i
//         }

//     }
// }
// const drib1 = {
//     numerator: 3,
//     denominator: 5,
// }
// const drib2 = {
//     numerator: 7,
//     denominator: 8,
// // }
// const operations = {
//     addition: function (obj1, obj2) {
//         const denominatorCommon = getCommonDenominator(obj1.denominator, obj2.denominator);
//         return
//     },
//     subtraction: function (obj1, obj2) {
//     }
// }
// operations.addition(drib1, drib2)
// ////

// reduction: function () {
//     let gcd = function (a, b) {
//         if (!b) {
//             return a;
//         }
//         return gcd(b, a % b);
//     };
//     let commonDivisor = gcd(this.numerator, this.denominator);
//     this.numerator /= commonDivisor;
//     this.denominator /= commonDivisor;
// }
// }
// drib.showDrib
// const drib1 = prompt('Please add numerator for drib 1')
// const drib2 = prompt('Please add denominator for drib 1')
// const drib3 = prompt('Please add numerator for drib 2')
// const drib4 = prompt('Please add denominator for drib 2')