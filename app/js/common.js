$(function() {
	function heightDetect() {
		$(".tutti-top").css("height", $(window).height());
	}
	heightDetect();
			$(window).resize(function() {
	heightDetect();
	}); 
});


