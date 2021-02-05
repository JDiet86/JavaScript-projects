function countdown() {      
    var seconds=document.getElementById("seconds").value;   //Naming variable and putting result into HTML element "seconds"

    function tick() {
        seconds=seconds -1;         //Assigns -1 to variable "seconds"
        timer.innerHTML = seconds;  //Displays countdown in HTML element "timer"
        setTimeout(tick, 1000);     //Sets amount of milliseconds timer will countdown at (1000ms=1s)
    if(seconds == -1) {     
        alert("Time's up!");    //when timer reaches 0, an alert will pop up
    }
        }
    tick();     //Runs function "tick"
}

var slideIndex = 1;     
showSlides(slideIndex);     //Function to display current slide


function plusSlides(n) {
  showSlides(slideIndex += n);  //Function to go to next or previous slide
}


function currentSlide(n) {
    showSlides(slideIndex = n); //Adds functionality to dots
  }
  

function showSlides(n) {    //Function to show correct slide
  var i;
  var slides = document.getElementsByClassName("mySlides"); //Displays images into HTML element "MySlides"
  var dots = document.getElementsByClassName("dot");    //Displays dots in HTML element "dot"
  if (n > slides.length) {slideIndex = 1}   //If slide number is greater than the amount of slides, goes to 1st slide
  if (n < 1) {slideIndex = slides.length}   //If slide number is less than 1, goes to last slide
  for (i = 0; i < slides.length; i++) {     
      slides[i].style.display = "none";     //Loop incrementing i by 1 each loop.  When i=0
  }
  for (i = 0; i < dots.length; i++) {      
      dots[i].className = dots[i].className.replace(" active", "");     //Loop incrementing i by 1 each loop
  }
  slides[slideIndex-1].style.display = "block";     //Displays images as a block element
  dots[slideIndex-1].className += " active";        //Displays the dot respective to the image number
}
