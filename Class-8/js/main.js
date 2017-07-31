jQuery(document).ready(function($){
  $(".product-carousel").owlCarousel({
    items: 4,
    margin: 40,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  });
});
