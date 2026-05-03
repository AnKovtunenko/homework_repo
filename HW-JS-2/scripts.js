//p1-1
let a = 0.1;
let b = 0.2;

let sum = (a + b).toFixed(1);
console.log('Sum =', sum); 

//p1-2
let a1 = '1';
let b1 = 2;

let sum1 = Number(a1) + b1  ;
console.log('Sum =', sum1);

//p1-3
const fileSize = 820;
const storagesSizeInGb = prompt('Enter size of flash storage (in GB):');
const storagesSizeInMb= Number(storagesSizeInGb) * 1024;
console.log('Number of files that can be stored:', Math.floor(storagesSizeInMb / fileSize));

//norm-1
const moneyAmount = prompt('Enter money amount');
const chocolatePrice = prompt('Enter choco price');
console.log('Amount of chocolates:', Math.floor(moneyAmount/chocolatePrice));
console.log('Money left:', moneyAmount%chocolatePrice);


//norm-2

const number3 = prompt('Enter 3 digits')
if (number3.length !== 3){
    alert('Please enter 3 digits')
}
else {
    const reversedNumber = number3.split('').reverse().join('');
    alert(`Reversed number: ${reversedNumber}`);
}

max-1
const deposit = prompt('Enter amount of deposit for 2 months')
const interestRate = 0.05;
const interest = (deposit * interestRate);
const totalAmount = Number(deposit) + interest;
alert(`Amount of money after 2 months: ${totalAmount}`);

// 2 && 0 && 3 виведеться 0

//  2 || 0 || 3 виведеться 2 

// 2 && 0 || 3 виведеться 3