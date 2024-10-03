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
			autoplay: true,
			autoplaySpeed: 3000
		});		

		slickInitialized = true;
	}

	$(window).on('load', function(){

		wW = window.innerWidth;

		if(wW < 768) {
			slickInit();
		} 
	});


	$(window).on('resize', function(){

		wW = window.innerWidth;

		if(wW < 768 && slickInitialized) {
			$('.offer').slick('refresh');
		} 
		else if(wW < 768 && !slickInitialized) {
			slickInit();
		}
		else if(wW > 768 && slickInitialized){
			$('.offer').slick('unslick');
		}
	});




})(jQuery);