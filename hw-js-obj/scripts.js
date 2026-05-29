const Cart = [
    {
        title: 'Bread',
        price: 36.8,
        quantity: 2

    },
    {
        title: 'Молоко',
        price: 42.00,
        quantity: 1
    },
]


// const findEl = Cart.findIndex((element) => element.title === 'Bread')
// if (findEl !== -1) {
//     Cart[findEl].quantity += 1
// } else {
//     Cart.push({
//         title: 'Молоко',
//         price: 42.00,
//         quantity: 1
//     }
//     )
// }

// console.log(`Елемент знайдено на індексі: ${findEl}`)
// }
// console.log(findEl)

const findEl = Cart.find((element) => element.title === 'Молоко')

if (findEl) {
    findEl.quantity = findEl.quantity + 1
} else {
    Cart.push({
        title: 'Молоко',
        price: 42.00,
        quantity: 1
    }
    )
}
console.log(findEl);