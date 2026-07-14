"use strict";

var modal = document.getElementById("detailsModal");
var modalImage = document.getElementById("modalImage");
var modalName = document.getElementById("modalName");
var modalPrice = document.getElementById("modalPrice");
var modalStatus = document.getElementById("modalStatus");
var modalDescription = document.getElementById("modalDescription");
var orderBtn = document.getElementById("orderBtn");
var currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'UAH'
});
var currentNecklace;
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("details-btn")) {
    var id = Number(e.target.dataset.id);
    currentNecklace = necklaces.find(function (n) {
      return n.id === id;
    });
    openModal(currentNecklace);
  }
});

function openModal(necklace) {
  modal.classList.remove("hidden");
  modalImage.src = '../' + necklace.photo;
  modalName.textContent = necklace.name;
  modalPrice.textContent = currencyFormatter.format(necklace.price);
  modalStatus.textContent = necklace.status;
  modalDescription.textContent = necklace.description;
  document.querySelectorAll("[name=length]")[0].checked = true;
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modal.classList.add("hidden");
});
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});
document.querySelectorAll("[name=length]").forEach(function (radio) {
  radio.addEventListener("change", function () {
    var price = Number(currentNecklace.price);

    if (radio.value === "40") {
      price += 30;
    }

    if (radio.value === "45") {
      price += 60;
    }

    modalPrice.textContent = currencyFormatter.format(price);
    orderBtn.disabled = false;
  });
});
var orderModal = document.getElementById("orderModal");
var orderImage = document.getElementById("orderImage");
var orderName = document.getElementById("orderName");
var orderPrice = document.getElementById("orderPrice");
var orderLength = document.getElementById("orderLength");
var selectedLength = 35;
var finalPrice = 0;
orderBtn.addEventListener("click", function () {
  selectedLength = document.querySelector("[name=length]:checked").value;
  finalPrice = Number(currentNecklace.price);

  if (selectedLength === "40") {
    finalPrice += 30;
  }

  if (selectedLength === "45") {
    finalPrice += 60;
  }

  orderImage.src = '../' + currentNecklace.photo;
  orderName.textContent = currentNecklace.name;
  orderPrice.textContent = "Price: ".concat(finalPrice, " \u0433\u0440\u043D");
  orderLength.textContent = "Length: ".concat(selectedLength, " cm");
  modal.classList.add("hidden");
  orderModal.classList.remove("hidden");
});

document.querySelector(".close-order").onclick = function () {
  orderModal.classList.add("hidden");
};

orderModal.addEventListener("click", function (e) {
  if (e.target === orderModal) {
    orderModal.classList.add("hidden");
  }
});
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var order = {
    name: document.getElementById("customerName").value,
    phone: document.getElementById("customerPhone").value,
    telegram: document.getElementById("customerTelegram").value,
    comment: document.getElementById("customerComment").value,
    necklace: currentNecklace.name,
    length: selectedLength,
    price: finalPrice,
    date: new Date().toLocaleString()
  };
  sendTelegramOrder(order).then(function () {
    alert("Order successfully sent!");
  })["catch"](function (e) {
    console.error('error :: ', e);
    alert("Could not send the order to Telegram. Please try again or contact us directly.");
  });
  orderModal.classList.add("hidden");
});
var grid = document.getElementById("catalog-grid");

function createCatalog() {
  grid.innerHTML = "";
  necklaces.forEach(function (necklace) {
    grid.innerHTML += "<div class=\"card\">\n            <div class=\"image-wrapper\">\n                <img src=\"".concat('../' + necklace.photo, "\" alt=\"").concat(necklace.name, "\">\n                <button\n                    class=\"details-btn\"\n                    data-id=\"").concat(necklace.id, "\">\n                Details\n                </button>\n           </div>\n           <div>\n            <h2>").concat(necklace.name, "</h2>\n            </div>\n");
  });
}

createCatalog();