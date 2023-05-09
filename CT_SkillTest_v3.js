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

let slideIndex = 0;
showThumbnails(slideIndex);

function showThumbnails(n) {
  let i;
  let thumbnails = document.getElementsByClassName("thumbnail");
  console.log(thumbnails[0]);
  carousel.appendChild
  let dots = document.getElementsByClassName("dot");

//   if (n > thumbnails.length) {slideIndex = 1}    
 
//   if (n < 1) {slideIndex = thumbnails.length}
//   for (i = 0; i < thumbnails.length; i++) {
//     thumbnails[i].style.display = "none";  
//   }

 //load first four images, starting from 
 let carousel = document.getElementById("carousel");
 carousel.innerHTML = "";
 for(i = n; i < dots.length+n; i++){
    console.log(i%dots.length + " -- " + thumbnails[i%dots.length]);
    carousel.append(thumbnails[0]);
    // carousel.appendChild(thumbnails[i%dots.length]);
    console.log("appended thumbnail: " + i);
 }

   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
  }

//  thumbnails[slideIndex-1].style.display = "block";  
  dots[slideIndex].className += " active";
}