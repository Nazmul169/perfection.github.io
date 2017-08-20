jQuery(document).ready(function($){
  $(".portfolio-item").owlCarousel({
    items: 5,
    loop: true,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    dots: true,
  });
});
