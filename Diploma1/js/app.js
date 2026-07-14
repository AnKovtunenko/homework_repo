


const catalog = document.getElementById("necklaces");
necklaces.forEach(item => {
    catalog.innerHTML += `<div class="card">
         <img src="${item.photo}" alt="${item.name}" style="width: 300px">
           <div class="info">
             <h3>${item.name}</h3>
             <p>${item.price} грн</p>
          </div>
         </div>`
})


$(document).ready(function () {
    $(".autoplay").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})
