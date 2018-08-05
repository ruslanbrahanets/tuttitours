$(function() {
	//$('.carousel').carousel();
	var Counterway = 0.0;
	var scrollerActive = false;
	var objLANG = $("#lang");
	var objCUR = $("#cur");
	var objCATEG = $(".category");
	var goscroll = false;
	var isScrolling = null;
	var scrollPos = 0;
	var firstAnimation = false;
	runonce = false;
	
	function init() {
		Counterway = -Math.abs(51);
	}

	init();

	function heightDetect() {
		$(".tutti-top").css("height", $(window).height());
	}
	heightDetect();
	ScrollerDetect();

	$(window).resize(function() {
		heightDetect();
	});
	
	$(window).on('scroll', scroller);

	function scroller() {
		ScrollerDetect();
		WayToLand();
		// Если скроллим
	}

	$("#search-input").focusin(function() {
		$(this).parent().addClass("search-active");
	});

	$("#search-input").focusout(function() {
		$(this).parent().removeClass("search-active");
	});

	$("#lang").click(function() {
		if(objLANG.parent().children(".dropdown").is(":hidden"))
		{
			objLANG.children(".down").addClass("arrow-active");
		} else {
			objLANG.children(".down").removeClass("arrow-active");
		}
		objLANG.parent().children(".dropdown").slideToggle();
	});

	$("#cur").click(function() {
		if(objCUR.parent().children(".dropdown").is(":hidden"))
		{
			objCUR.children(".down").addClass("arrow-active");
		} else {
			objCUR.children(".down").removeClass("arrow-active");
		}
		objCUR.parent().children(".dropdown").slideToggle();
	});

	$(".category").click(function() {
		if(objCATEG.children(".dropdown").is(":hidden"))
		{
			objCATEG.children(".dropdown-menu").children("svg").addClass("arrow-active");
		} else {
			objCATEG.children(".dropdown-menu").children("svg").removeClass("arrow-active");
		}
		objCATEG.children(".dropdown").slideToggle();
	});

	$(document).mouseup(function (e) {
		if (!objLANG.parent().is(e.target) 
		    && objLANG.parent().has(e.target).length === 0 && !objLANG.parent().children(".dropdown").is(":hidden")) {
			objLANG.children(".down").removeClass("arrow-active");
			objLANG.parent().children(".dropdown").slideUp();
		}
		if (!objCUR.parent().is(e.target) 
		    && objCUR.parent().has(e.target).length === 0 && !objCUR.parent().children(".dropdown").is(":hidden")) {
			objCUR.children(".down").removeClass("arrow-active");
			objCUR.parent().children(".dropdown").slideUp();
		}
		if (!objCATEG.is(e.target) 
		    && objCATEG.has(e.target).length === 0 && !objCATEG.children(".dropdown").is(":hidden")) {
			objCATEG.children(".dropdown-menu").children("svg").removeClass("arrow-active");
			objCATEG.children(".dropdown").slideUp();
		}
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
			$(".menu a").addClass("menu-black");
			$(".dropdown").addClass("white-bg");
			$(".down").addClass("down-active");
			$(".cart").addClass("cart-active");
			myVar = setTimeout(function(){
				$(".cube").addClass("cubeon");
				$(".dw0").css("fill","#000");
				$(".logo").addClass("logo-go");
				$(".counter").css("color","#fff");
				if(scrollerActive == false) {
					$(".cube").removeClass("cubeon");
					$(".dw0").css("fill","#fff");
					$(".logo").removeClass("logo-go");
				}
			},500);
		} else if(s_top < yes && scrollerActive==true) {
			scrollerActive = false;
			$(".cube").removeClass("cubeon");
			$(".menu").removeClass("menu-scroller");
			$("#Deskw_1").removeClass("menu-scroller-logo");
			$("#Deskw_1").parent().removeClass("logo-scroller");
			$(".menu a").removeClass("menu-black");
			$(".dropdown").removeClass("white-bg");
			$(".dw0").css("fill","#fff");
			$(".logo").removeClass("logo-go");
			$(".down").removeClass("down-active");
			$(".cart").removeClass("cart-active");
		}
	}

	function WayToLand() {
		$(".under").css("width","0%");
		var blstart = $("#mscroller").offset().top;
		var blstart2 = $(".line-start").offset().top;
		var blfinish = $(".tutti-footer").offset().top;
		var scroll = $(window).scrollTop();
		var checkerW = 10;
		var width = $(window).width(); 
		if(scroll>blstart && scroll<(blstart2-200))
		{
			firstAnimation = true;
			$(".tutu").css("transition-duration","0.3s");
			$(".tutu").css("opacity","1");
			if (scroll > scrollPos){
				$(".tutu").removeClass("tutu-reverse");
			} else {
				$(".tutu").addClass("tutu-reverse");
			}
			$(".tutu").css("top","-47px");
			scrollPos = scroll;
		} else {
			if(firstAnimation) 
			{
				$(".tutu").css("transition-duration","0.3s");
				firstAnimation = false;
			} else {
				$(".tutu").css("transition-duration","0.1s");
			}
			if(scroll>=(blstart2-200) && scroll<(blfinish-250)) {
				$(".tutu").css("opacity","1");
				if (scroll > scrollPos){
					if($(".tutu").hasClass("tutu-reverse")) {	
						$(".tutu").removeClass("tutu-reverse");
					}
				} else {
					if($(".tutu").hasClass("tutu-reverse")) {
						
					} else {
						$(".tutu").addClass("tutu-reverse");
					}
				}
				scrollPos = scroll;
				var height = $(window).height();
				Counterway = scroll + (height/2) - $(".tutti-top").height() - 22; 
				$(".tutu").css("top",Counterway);
			} else {
				$(".tutu").css("opacity","0");
			}
		}
		return false;
	}
});


