window.onscroll = function(){
    stickNav();
}

var navbar = document.getElementById("stickyNav")

var sticky = navbar.offsetTop;

function stickNav(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")

    } else {
        navbar.classList.remove("sticky");
    }
}