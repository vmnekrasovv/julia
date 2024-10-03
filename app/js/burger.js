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
})(jQuery);