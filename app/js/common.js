$(function() {
	function heightDetect() {
		$(".top").css("height", $(window).height());
	}
	heightDetect();
			$(window).resize(function() {
	heightDetect();
	}); 
});


