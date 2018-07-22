$(function() {
	//$('.carousel').carousel();
	function heightDetect() {
		$(".tutti-top").css("height", $(window).height());
	}
	heightDetect();
			$(window).resize(function() {
	heightDetect();
	});

	var header = $(".menu"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		var firstScrollUp = false; // Параметр начала сколла вверх
		var firstScrollDown = false; // Параметр начала сколла вниз
		
		// Если скроллим
	});
	 
});

