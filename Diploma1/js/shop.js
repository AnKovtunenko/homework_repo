const modal = document.getElementById("detailsModal");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalStatus = document.getElementById("modalStatus");
const modalDescription = document.getElementById("modalDescription");

const orderBtn = document.getElementById("orderBtn");
const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'UAH' });

let currentNecklace;

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("details-btn")) {
    const id = Number(e.target.dataset.id);
    currentNecklace = necklaces.find(n => n.id === id);
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

document.querySelector(".close-modal").addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});

document.querySelectorAll("[name=length]").forEach(radio => {
  radio.addEventListener("change", () => {
    let price = Number(currentNecklace.price);
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


const orderModal = document.getElementById("orderModal");

const orderImage = document.getElementById("orderImage");
const orderName = document.getElementById("orderName");
const orderPrice = document.getElementById("orderPrice");
const orderLength = document.getElementById("orderLength");

let selectedLength = 35;
let finalPrice = 0;
orderBtn.addEventListener("click", () => {
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
  orderPrice.textContent = `Ціна: ${finalPrice} грн`;
  orderLength.textContent = `Довжина: ${selectedLength} cm`;
  modal.classList.add("hidden");
  orderModal.classList.remove("hidden");
});
document.querySelector(".close-order").onclick = () => {
  orderModal.classList.add("hidden");
}
orderModal.addEventListener("click", (e) => {
  if (e.target === orderModal) {
    orderModal.classList.add("hidden");
  }
});

document
  .getElementById("orderForm")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const order = {
      name: document.getElementById("customerName").value,
      phone: document.getElementById("customerPhone").value,
      telegram: document.getElementById("customerTelegram").value,
      comment: document.getElementById("customerComment").value,
      necklace: currentNecklace.name,
      length: selectedLength,
      price: finalPrice,
      date: new Date().toLocaleString()
    };

    sendTelegramOrder(order)
      .then(function () {
        toastr.success("Замовлення сформоване, ми з вами звʼяжемося!");
      })
      .catch(function (e) {
        console.error('error :: ', e);
        toastr.error("Помилка при створенні замовдення, будь ласка напишіть нам в інстаграм @te.cest.");
      });
    orderModal.classList.add("hidden");

  });

const grid = document.getElementById("catalog-grid");
function createCatalog() {
  grid.innerHTML = "";
  necklaces.forEach(necklace => {
    grid.innerHTML += `<div class="card">
            <div class="image-wrapper">
                <img src="${'../' + necklace.photo}" alt="${necklace.name}">
                <button
                    class="details-btn"
                    data-id="${necklace.id}">
                Замовити
                </button>
           </div>
           <div>
            <h2>${necklace.name}</h2>
            </div>
`;
  });
}

createCatalog();