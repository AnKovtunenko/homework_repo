"use strict";

var catalog = document.getElementById("necklaces");
necklaces.forEach(function (item) {
  catalog.innerHTML += "<div class=\"card\">\n         <img src=\"".concat(item.photo, "\" alt=\"").concat(item.name, "\" style=\"width: 300px\">\n           <div class=\"info\">\n             <h3>").concat(item.name, "</h3>\n             <p>").concat(item.price, " \u0433\u0440\u043D</p>\n          </div>\n         </div>");
});
$(document).ready(function () {
  $(".autoplay").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
});