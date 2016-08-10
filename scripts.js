$('document').ready(function(){
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if ( $(this).scrollTop() > $('header').height()){
			$("nav").addClass("main-nav-scrolled");
		} else {
			$("nav").removeClass("main-nav-scrolled");
		}
	});
});