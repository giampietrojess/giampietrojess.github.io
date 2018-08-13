$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});

$(function(){

    $('div.name').animate({'margin-left': '450px', 'margin-top' : '100px'}, 500);
    
});

$(function(){

    $('div.script').animate({'margin-left': '450px', 'margin-top' : '0px'}, 1000);
    
});


document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }

    //Mobile Navbar
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);


  
  });
  






