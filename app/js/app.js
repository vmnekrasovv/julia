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
			      breakpoint: 420,
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
			   	 breakpoint: 1050,
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


	function timer() {

		let hourBox = $('.timer__hour');
		let minBox = $('.timer__min');
		let minVal = minBox.text();
		let secBox = $('.timer__sec');
		let secVal = secBox.text();
		let timerSepor = $('.timer__sepor');

		let timerNums = $('.timer__nums');
		let numsItem = timerNums.find('span');


		secVal--;

		if(secVal < 0) {
			minVal--;

			if(minVal < 0){

				$('body').html('').addClass('bg-end');

				minBox.text('29');
				secBox.text('59');

				numsItem.each(function(i, el){
					$(el).removeClass('warning');
				});

				return false;
			}

			if(minVal < 10) minVal = '0' + minVal;

			if(minVal < 1){ 
				numsItem.each(function(i, el){
					$(el).addClass('warning');
				});
			}

			minBox.text(minVal);
			secBox.text('59');

		} else {
			if(secVal < 10) secVal = '0' + secVal;
			secBox.text(secVal);
		}	
	}

	setInterval(timer, 1000);


})(jQuery);