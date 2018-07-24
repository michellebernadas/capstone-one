$(document).ready(function(){
	$('.header-text h3.left').click(function(){
		$('.about').animate({
			top:0}, 900)
	})

	$('button.icon').click(function(){
		$('.about').animate({
			top:"-100%"}, 900)
	})

	$('h3.right').click(function(){
		$('.contact').animate({
			top:0
		})
	})

	$('button.icon').click(function(){
		$('.contact').animate({
			top:"-100%"
		})
	})

	$('.footer-text h3.left').click(function(){
		$('.skills').animate({
			bottom:0
		})
	})

	$('button.icon').click(function(){
		$('.skills').animate({
			bottom:"-100%"
		})
	})



	$(window).on("load", function(){
		$('.header-text h3').fadeIn(2000);
		$('.footer-text h3').fadeIn(2000);
		$('.body-div img').fadeToggle(500);
		
	})

	$(window).on("load", function(){
		$('.body-div img').fadeIn(2000);
	})




});