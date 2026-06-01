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
}]; // const addResult = addToCart(title, price, qty)
// showProductList(){
//     const massage = addResult === 'add'
//         ? 'Product successfully added to cart'
//         : 'Product quantity successfully changed'
//     toast.success(massage)
//     return false
// }
// function addToCart(title, price, quantity) {
//     const findedEl = CART.find((el) => el.title.toLocaleLowerCase() === title.toLocaleLowerCase())
//     if (findedEl) {
//         findedEl.qty += quantity
//         return 'update'
//     } else {
//         CART.push({
//             title,
//             price,
//             qty
//         })
//         return 'add'
//     }
// }

function showProductsList() {
  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'isBought';
  var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
  var html = '';
  var sum = 0;

  if (CART.length) {
    CART.toSorted(function (a, b) {
      return a.isBought - b.isBought;
    }).forEach(function (item, index) {
      var total = (item.price * item.quantity).toFixed(2);
      var status = "<span class=\"tag is-".concat(item.isBought ? 'success' : 'danger', "\">").concat(item.isBought ? 'Yes' : 'No', "</span>");
      html += "<tr data-title=\"".concat(item.title, "\" >\n                <td>").concat(index + 1, "</td>\n                <td>").concat(item.title, "</td>\n                <td>").concat(status, "</td>\n                <td>").concat(item.price.toFixed(2), "</td>\n                <td>").concat(item.quantity, "</td>\n                <td>").concat(total, "</td>\n                <td> \n                ").concat(!item.isBought ? '<button class="button is-small is-success" onclick="buyProduct(\'' + item.title + '\')">Buy</button>' : '', "\n            </tr > ");
      sum += parseFloat(total);
    });
  } else {
    html = "< tr >\n                <td colspan=\"5\">No products in cart</td>\n        </tr > ";
  }

  console.log(sum);
  getEl('products_list').innerHTML = html;
  getEl('cart_total').innerHTML = sum.toFixed(2);
  var totalBuy = CART.filter(function (el) {
    return el.isBought;
  }).reduce(function (acc, item) {
    return acc + item.price * item.quantity;
  }, 0);
  var totalNotBuy = CART.filter(function (el) {
    return !el.isBought;
  }).reduce(function (acc, item) {
    return acc + item.price * item.quantity;
  }, 0);
  console.log(totalBuy, totalNotBuy);
}

showProductsList();
var filteredBought = CART.filter(function (item) {
  return item.isBought;
});
var filteredNotBought = CART.filter(function (item) {
  return !item.isBought;
});
console.log(filteredBought, filteredNotBought);

function buyProduct(title) {}

var findEl = CART.find(function (element) {
  return element.title === 'Молоко';
});

if (findEl) {
  findEl.quantity = findEl.quantity + 1;
} else {
  CART.push({
    title: 'Молоко',
    price: 42.00,
    quantity: 1,
    isBought: false
  });
}

console.log(findEl);
console.log("\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043D\u0430 \u0456\u043D\u0434\u0435\u043A\u0441\u0456: ".concat(findEl, " "));

function calcCartTotal() {
  var total = CART.reduce(function (acc, item) {
    console.log(acc, item);
    return acc + item.price * item.quantity;
  }, 0);
  getEl('cart_total').innerText = total.toFixed(2);
}

function submitHandler(event) {
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
  showProductList();
  var massage = addResult === 'add' ? 'Product successfully added to cart' : 'Product quantity successfully changed';
  toast.success(massage);
  return false;
}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('sortable')) {
    showProductsList(e.target.dataset.col, e.target.dataset.sort);
  }
});