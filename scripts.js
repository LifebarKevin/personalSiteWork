$('document').ready(function(){
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if ( $(this).scrollTop() > $('header').height()){
			$("nav").addClass("main-nav-scrolled");
		} else {
			$("nav").removeClass("main-nav-scrolled");
		}
		if ( $(this).scrollTop() >= 160){
			$('.lname').fadeOut('fast');
		}else{
			$('.lname').fadeIn('slow');
		}
		if ( $(this).scrollTop() >= 330){
			$('.fname').fadeOut('fast');
		}else{
			$('.fname').fadeIn('slow');
		}
		if ( $(this).scrollTop() >= 430){
			$('.hi').fadeOut('fast');
			$('.im').fadeOut('fast');
		}else{
			$('.hi').fadeIn('slow');
			$('.im').fadeIn('slow');
		}
	});
});