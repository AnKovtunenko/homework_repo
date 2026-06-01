"use strict";

var CART = [{
  title: 'Молоко',
  price: 42.00,
  quantity: 1,
  isBought: true
}, {
  title: 'Хліб',
  price: 28.50,
  quantity: 2,
  isBought: false
}, {
  title: 'Яйця',
  price: 76.00,
  quantity: 1,
  isBought: true
}, {
  title: 'Сир',
  price: 135.90,
  quantity: 1,
  isBought: false
}, {
  title: 'Кава',
  price: 249.99,
  quantity: 1,
  isBought: true
}, {
  title: 'Банани',
  price: 64.30,
  quantity: 3,
  isBought: false
}];
var filteredBought = CART.filter(function (item) {
  return item.isBought;
});
var filteredNotBought = CART.filter(function (item) {
  return !item.isBought;
});
console.log(filteredBought, filteredNotBought); // console.log(`Елемент знайдено на індексі: ${findEl}`)
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
  var total = CART.reduce(function (acc, item) {
    console.log(acc, item);
    return acc + item.price * item.quantity;
  }, 0);
  getEl('cart-total').innerText = total.toFixed(2);
}

function submitHandler() {
  event.preventDefault();
  var title = getEl('product_title').value;
  var price = getEl('product_price').valueAsNumber;
  var quantity = getEl('product_quantity').valueAsNumber;

  if (title === '') {
    toast.error('Назва продукту не може бути порожньою');
    return false;
  }

  if (isNaN(price) || price <= 0) {
    toast.error('Ціна повинна бути більше нуля');
    return false;
  }

  if (isNaN(quantity) || quantity <= 0) {
    toast.error('Введіть кількість');
    return false;
  }

  var addResult = addToCart(title, price, quantity);
  var message = addResult === 'add' ? 'Producr added' : 'Product\'s quantity changed';
  toast.success(message);
  console.log(CART);
  return false;
}

function addToCart(title, price, quantity) {
  var findEl = CART.find(function (element) {
    return element.title.toLowerCase() === title.toLowerCase();
  });

  if (findEl) {
    findEl.quantity = findEl.quantity + quantity;
  } else {
    CART.push({
      title: title,
      price: price,
      quantity: quantity
    });
    return 'add';
  }
}

function showProductsList(field, sort) {
  var html = '';
  var sum = 0;

  if (CART.length) {
    CART.forEach(function (item, index) {
      html += "<tr>\n            <td>".concat(index + 1, "</td>\n            <td>").concat(item.title, "</td>\n            <td>").concat(item.price.toFixed(2), "</td>\n            <td>").concat(item.quantity, "</td>\n            <td>").concat((item.price * item.quantity).toFixed(2), "</td>\n            </tr>");
      sum += prodTotal;
    });
  } else {
    html = "<tr>\n        <td colspan=\"5\">No products in cart</td>\n        </tr>";
  }

  getEl('products_list').innerHTML = html;
  getEl('cart_total').innerHTML = sum.toFixed(2);
}

showProductsList(); // document.addEventListener('click', function (e)) {
//     if (e.target.classList.contains('sortable')) {
//     }
// })