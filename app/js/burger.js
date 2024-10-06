(function($){
	$(document).ready(function(){

		let btn = $('.burger');
		let headerMenu = $('.header-menu');

		btn.click(function(){
			btn.toggleClass('active');
			headerMenu.toggleClass('active');
			$('body').toggleClass('lock');
		});

	});

	$(window).on('resize', function(){
		let wW = window.innerWidth;

		if(wW > 767){
			$('.burger').removeClass('active');
			$('.header-menu').removeClass('active');
		}
	});

})(jQuery);