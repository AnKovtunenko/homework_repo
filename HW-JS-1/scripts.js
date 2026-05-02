//norm-1
let name = prompt('Як тебе звати?');
console.log(typeof name)
if (name.length < 3) {
    alert('Вкажи справжнє імʼя!');
}  
else {
    alert (`Привіт, ${name}!`);
}
//norm-2
let year = prompt('Якого ти року народження?');
if (year){
    let age = 2026 - year;
    alert (`Тобі ${age} років!`);
}
//norm-3
let sideLength = prompt ('Введи довжину сторони квадрата:');
if(sideLength){
    let area = Math.pow(sideLength, 2);
    alert (`Площа квадрата = ${area}`);
}
let perimets = 4 * sideLength;
alert (`Периметр квадрата = ${perimets}`);

//max-1
let radius = prompt ('Введи радіус кола:');
if(radius){
let area = Math.PI * Math.pow(radius, 2);
alert (`Площа кола = ${area}`);
}

//max-2
let distance = prompt ('Введи відстань між містами (км):');
let time = prompt ('Введи час, за який хочеш дістатися (години):');
let speed = distance / time;
alert (`Тобі потрібно їхати зі швидкістю ${speed} км/год!`);

//max-3
let hryvnia = prompt('Введіть суму в гривнях:');
const exchangeRate = 0.023; 
let dollars = hryvnia * exchangeRate;
alert (`Вітаю, у тебе ${dollars} доларів!`);


/* 
MANY
LINES
COMMENT
*/


//DWQDESVEW
