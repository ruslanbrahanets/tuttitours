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
	
	$(document).scroll(function() {
		ScrollerDetect();
		WayToLand();
		// Если скроллим
	});

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
		goscroll = true;
		var s_top = $(window).scrollTop();	
		var bl1 = $("#bl1").offset().top;
		var bl2 = $("#bl2").offset().top;
		var bl3 = $("#bl3").offset().top;
		var bl4 = $("#bl4").offset().top;
		var bl5 = $("#bl5").offset().top;
		var bl6 = $("#bl6").offset().top;
		s_top = s_top + 600;
		/*if(opredelitel < Counterway) {
			$(".tutu").addClass("tutu-reverse");
		} else {
			$(".tutu").removeClass("tutu-reverse");
		}*/
		//console.log(s_top + " " + opredelitel);
		var st = $(window).scrollTop();
		if (st > scrollPos){
			$(".tutu").removeClass("tutu-reverse");
		} else {
			$(".tutu").addClass("tutu-reverse");
		}
		scrollPos = st;
		
		if(s_top < bl1) {
			Counterway = -Math.abs(51);
			opredelitel = Counterway;
			$(".tutu").css("top",Counterway);
			$(".tutu").css("opacity","0");
			return;
		}
		$(".tutu").css("opacity","1");
		if(s_top > bl1 && s_top < bl2){
			Counterway = 123;
			opredelitel = Counterway;
			$(".tutu").css("top",Counterway);
			$(".under1").css("width","42%");
			return;
		} 
		if(s_top > bl2 && s_top < bl3){
			Counterway = 585;
			opredelitel = Counterway;
			$(".tutu").css("top",Counterway);
			$(".under2").css("width","49.5%");
			return;
		} 
		if(s_top > bl3 && s_top < bl4){
			Counterway = 2372;
			opredelitel = Counterway;
			$(".tutu").css("top",Counterway);
			$(".under3").css("width","52%");
			return;
		} 
		if(s_top > bl4 && s_top < bl5){
			Counterway = 3905;
			opredelitel = Counterway;
			$(".tutu").css("top",Counterway);
			$(".under4").css("width","103%");
			return;
		}
		if(s_top > bl5 && s_top < bl6){
			Counterway = 5328;
			opredelitel = Counterway;
			$(".tutu").css("top",Counterway);
			$(".under5").css("width","43.5%");
			return;
		}
		if(s_top > bl6){
			Counterway = 6220;
			opredelitel = Counterway;
			$(".tutu").css("top",Counterway);
			$(".under6").css("width","38%");
			return;
		}

	}
});