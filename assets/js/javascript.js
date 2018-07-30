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





