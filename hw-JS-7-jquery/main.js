const guitars = [
    {
        image: './assets/images/item1.png',
        title: 'Hagstrom Alvar Limited Edition',
        price: '€2.990,00',
        status: 'in stock'
    },
    {
        image: './assets/images/item2.png',
        title: 'Hagstrom Tremar Viking Deluxe Cloudy Seas',
        price: '€1.990,00',
        status: 'in stock'
    },
    {
        image: './assets/images/item1.png',
        title: 'Fender Telecaster Black Paisley Limited Edition',
        price: '€2.190,00',
        status: 'in stock'
    },
    {
        image: './assets/images/item3.png',
        title: 'Gibson Les Paul Standard 60s',
        price: '€3.990,00',
        status: 'sold'
    },
    {
        image: './assets/images/item4.png',
        title: 'Suhr Standard Plus Trans Blue Denim',
        price: '€2.220,00',
        status: 'in stock'
    },
    {
        image: './assets/images/item1.png',
        title: 'Fender Telecaster Black Paisley Limited Edition',
        price: '€1.190,00',
        status: 'in stock'
    }
];

const itemWrap = document.querySelector('.item-wrap');

guitars.forEach(guitar => {
    itemWrap.innerHTML += `
        <div class="item">
            <div class="status ${guitar.status === 'sold' ? 'sold' : 'in-stock'}">
                ${guitar.status}
            </div>
            <div class="item-content">
                
                <div class="photo">
                    <img class="guitar" src="${guitar.image}" alt="${guitar.title}">
                </div>
                <div class="title">
                    ${guitar.title}
                </div>
                <div class="price">
                    ${guitar.price}
                </div>
            </div>
        </div>
    `;
});
