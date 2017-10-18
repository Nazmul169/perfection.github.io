jQuery(document).ready(function($){
 $(".portfolio-list").masonry({
});

 $(".single-portfolio-item").hover(function(){
 	$(".single-portfolio-item .portfolio-hover h2").removeClass("animated slideInDown");
 	$(this).find(".portfolio-hover h2").addClass("animated slideInDown");
 })

 $(".trigger-menu").on('click',function(){
 	$(".offcanvas-menu").addClass("active");
 	$(".offcanvas-menu-overlay").addClass("active");
 });
  $(".menu-close i.fa,.offcanvas-menu-overlay").on('click',function(){
 	$(".offcanvas-menu").removeClass("active");
 	$(".offcanvas-menu-overlay").removeClass("active");
 });
  $(".header-area").headroom();

});