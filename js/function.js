$(document).ready(function inicio() {
	smoth_scroll();
	header_position();
});

function smoth_scroll() {
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 700, 'swing', function() {
			window.location.hash = target;
		});
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