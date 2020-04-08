// Borrowed from:
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" activeSlide", "");
//     }

//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " activeSlide";
//     setTimeout(showSlides, 5000); // Change image every 5 seconds
// }

//---------------------------------------------------------------------------

// https://www.w3schools.com/w3css/w3css_slideshow.asp
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
  setTimeout(carousel, 10000); // Change image every 10 seconds
}