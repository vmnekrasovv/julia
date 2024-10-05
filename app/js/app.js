(function($){

	let wW = window.innerWidth;
	let slickInitialized = false;

	function slickInit() {
		$('.offer').slick({
			speed: 1000,
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipeToSlide: true,
			autoplay: false,
			autoplaySpeed: 3000,
			mobileFirst: true,
			responsive: [
			   {
			      breakpoint: 376,
			      settings: {
			      	slidesToShow: 2,
					slidesToScroll: 2,
			      }
			   }, 
			   {
			   	 breakpoint: 576,
			      settings: {
			      	slidesToShow: 3,
					slidesToScroll: 3,
			      }
			   },
			   {
			   	 breakpoint: 768,
			      settings: {
			      	slidesToShow: 4,
					slidesToScroll: 4,
			      }
			   },
			   {
			   	 breakpoint: 990,
			      settings: {
			      	slidesToShow: 5,
					slidesToScroll: 5,
			      }
			   }
			]
		});		

		slickInitialized = true;
	}

	$(window).on('load', function(){

		wW = window.innerWidth;

		if(wW < 1200) {
			slickInit();
		} 
	});


	$(window).on('resize', function(){

		wW = window.innerWidth;

		if(wW < 1200 && slickInitialized) {
			$('.offer').slick('refresh');
		} 
		else if(wW < 1200 && !slickInitialized) {
			slickInit();
		}
		else if(wW > 1200 && slickInitialized){
			$('.offer').slick('unslick');
		}
	});




})(jQuery);