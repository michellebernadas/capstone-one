$(document).ready(function(){

    var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

  var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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

    
});