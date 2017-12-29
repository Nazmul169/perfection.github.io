jQuery(document).ready(function($){
  $(".slider-area").owlCarousel({
    items: 1,
    loop: true,
    // autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    
  });
  $(".logo-carousel").owlCarousel({
    items: 5,
    loop: true,
    // autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    margin:30,
    
  });
});