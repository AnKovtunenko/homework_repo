const CART = [
    {
        title: 'Молоко',
        price: 42.00,
        quantity: 1,
        isBought: true
    },
    {
        title: 'Хліб',
        price: 28.50,
        quantity: 2,
        isBought: false
    },
    {
        title: 'Яйця',
        price: 76.00,
        quantity: 1,
        isBought: true
    },
    {
        title: 'Сир',
        price: 135.90,
        quantity: 1,
        isBought: false
    },
    {
        title: 'Кава',
        price: 249.99,
        quantity: 1,
        isBought: true
    },
    {
        title: 'Банани',
        price: 64.30,
        quantity: 3,
        isBought: false
    }
]

function addToCart(title, price, quantity) {
    const findEl = CART.find((element) => element.title.toLowerCase() === title.toLowerCase())
    if (findEl) {
        findEl.quantity = findEl.quantity + quantity
        return 'update'
    } else {
        CART.push({
            title,
            price,
            quantity,
            isBought: false
        })
        return 'add'
    }
}

function showProductsList(field = 'isBought', sort = 'asc') {
    let html = ''
    let sum = 0
    if (CART.length) {
        CART.toSorted((a, b) => a.isBought - b.isBought).forEach((item, index) => {
            const total = (item.price * item.quantity).toFixed(2)
            const status = `<span class="tag is-${item.isBought ? ' success' : 'danger'}">${item.isBought ? 'Yes' : 'No'}</span>`
            html += `<tr data-title="${item.title}" >
                <td>${index + 1}</td>
                <td>${item.title}</td>
                <td>${item.isBought ? 'yes' : 'no'}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>${total}</td>
            </tr > `
            sum += parseFloat(total)
        })
    } else {
        html = `< tr >
                <td colspan="5">No products in cart</td>
        </tr > `
    }
    console.log(sum)

    getEl('products_list').innerHTML = html
    getEl('cart_total').innerHTML = sum.toFixed(2)
    const totalBuy = CART
        .filter(el.isBought)
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
    const totalNotBuy = CART
        .filter(el => !el.isBought)
        .reduce((acc, item) => acc + item.price * item.quantity, 0)

} showProductsList()


const filteredBought = CART.filter(item => item.isBought);
const filteredNotBought = CART.filter(item => !item.isBought);
console.log(filteredBought, filteredNotBought)



// console.log(`Елемент знайдено на індексі: ${ findEl } `)

// console.log(findEl)

// const findEl = CART.find((element) => element.title === 'Молоко')

// if (findEl) {
//     findEl.quantity = findEl.quantity + 1
// } else {
//     CART.push({
//         title: 'Молоко',
//         price: 42.00,
//         quantity: 1
//     }
//     )
// }
// console.log(findEl);



function calcCartTotal() {
    const total = CART.reduce((acc, item) => {
        console.log(acc, item);
        return acc + item.price * item.quantity
    }
        , 0)
    getEl('cart-total').innerText = total.toFixed(2)
}

function submitHandler() {
    event.preventDefault()
    const title = getEl('product_title').value
    const price = getEl('product_price').valueAsNumber
    const quantity = getEl('product_quantity').valueAsNumber

    if (title === '') {
        toast.error('Назва продукту не може бути порожньою')
        return false
    }
    if (isNaN(price) || price <= 0) {
        toast.error('Ціна повинна бути більше нуля')
        return false
    }
    if (isNaN(quantity) || quantity <= 0) {
        toast.error('Введіть кількість')
        return false
    }

    const addResult = addToCart(title, price, quantity)
    const message = addResult === 'add'
        ? 'Producr added'
        : 'Product\'s quantity changed'
    toast.success(message)
    console.log(CART)
    return false
}






document.addEventListener('click', function (e) {
    if (e.target.classList.contains('sortable')) {
        showProductsList(e.target.dataset.col, e.target.dataset.sort)
    }
})

