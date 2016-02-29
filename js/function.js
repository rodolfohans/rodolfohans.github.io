$(document).ready(function inicio() {
	smoth_scroll();
	header_position();
	menu_mobile();
});

function smoth_scroll() {
	$("a[href^='#']").on("click",function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$("html, body").stop().animate({
			"scrollTop": $target.offset().top
		}, 700, "swing", function() {
			window.location.hash = target;
		});
	});
}

function menu_mobile() {
	$("#burger-toggle").click(function() {
		$(this).toggleClass("active");
		$("#body").toggleClass("body-hidden");
		if ($(this).hasClass("active")) {
			$("body").bind("touchmove", function(e){e.preventDefault()});
		}
		else {
			$("#body").unbind("touchmove");
		}
		$("#nav-mobile").toggleClass("open");
	});
	$(".nav-select").click(function() {
		$("#body").unbind("touchmove");
		$("#body").removeClass("body-hidden");
		$("#burger-toggle").removeClass("active");
		$("#nav-mobile").removeClass("open");
	});
}

function header_position() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
			document.getElementById("header").style.position="fixed";
		}
		else {
			document.getElementById("header").style.position="absolute";
		}
	});
}