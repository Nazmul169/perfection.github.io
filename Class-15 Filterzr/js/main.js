jQuery(document).ready(function($){

	$('.portfolio-filter li').on('click', function(){  
		$('.portfolio-filter li').removeClass('active');
		$(this).addClass('active'); 
	}); 

	$('.portfolio-list').filterizr({
	        layout:'sameWidth'
	    }); 


});