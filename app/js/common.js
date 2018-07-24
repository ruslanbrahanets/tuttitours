$(function() {
	//$('.carousel').carousel();
	var scrollerActive = false;
	function heightDetect() {
		$(".tutti-top").css("height", $(window).height());
	}
	heightDetect();
	ScrollerDetect();

	$(window).resize(function() {
		heightDetect();
	});

	var header = $(".menu"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(document).scroll(function() {
		ScrollerDetect();
		// Если скроллим
	});
	 
	function ScrollerDetect() {
		var s_top = $(window).scrollTop();
		var yes = $("#mscroller").offset().top;
		s_top = s_top + 210;
		if(s_top > yes && scrollerActive==false){
			scrollerActive = true;
			$(".menu").addClass("menu-scroller");
			$("#Deskw_1").addClass("menu-scroller-logo");
			$("#Deskw_1").parent().addClass("logo-scroller");	
		} else if(s_top < yes && scrollerActive==true) {
			scrollerActive = false;
			$(".menu").removeClass("menu-scroller");
			$("#Deskw_1").removeClass("menu-scroller-logo");
			$("#Deskw_1").parent().removeClass("logo-scroller");
		}
	}
});

