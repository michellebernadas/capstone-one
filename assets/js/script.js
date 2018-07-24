$(document).ready(function(){
	var myIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
    }

	$('button.menu').click(function(){
		
		$('.dropdown-menu').toggleClass('dropdown-menu1');
		$('.menus').toggleClass('menus1');
	})

	$('button.dropbtn').click(function(){
		
		$('.dropdown-content').toggleClass('dropdown-content1');
	})
    $('button.dropbtn2').click(function(){
        
        $('.dropdown-content2').toggleClass('dropdown-content3');
    })



    $(window).on('scroll', function(){
        var scrollvalue=$(window).scrollTop();
        console.log(scrollvalue);
        if (scrollvalue >800) {
            $('.words').fadeIn(4000);
        }
    })

    $('top-image').click(function(){
        $('.black-cover').animate({right:'200px'});  
    });


})