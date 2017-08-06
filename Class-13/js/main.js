$(".js-modal-btn").modalVideo();

jQuery(document).ready(function($){

		$(".welcome-area").YTPlayer({
	    fitToBackground: true,
	    videoId: 'LSmgKRx5pBo',
	});

	var owl = $('.homepale-slide');

	owl.owlCarousel({
		items: 1,
	    loop: true,
	    dots: true,
	    autoplay: false,
	    autoplayTimeout: 2000,
	    nav: true,
	    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});

	owl.on('translate.owl.carousel', function(event) {
		$(".welcome-area-text h4").removeClass("animated bounceIn");
		$(".welcome-area-text h1").removeClass("animated jackInTheBox");
		$(".welcome-area-text p").removeClass("animated fadeIn");
	});
	owl.on('translated.owl.carousel', function(event) {
		$(".welcome-area-text h4").addClass("animated bounceIn");
		$(".welcome-area-text h1").addClass("animated jackInTheBox");
		$(".welcome-area-text p").addClass("animated fadeIn");
	});

});
