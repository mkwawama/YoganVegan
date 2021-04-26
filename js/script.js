console.log("Loaded");

//Use QuerySelector to select an object frm the DOM(Documnet Object Model)
var btn = document.querySelector(".mobileNavBTN");
var menu= document. querySelector(".menu");

var slideIndex = 0;
showSlides();  //call showSlides function

//Attach an event listener to the element, that listnes for a click
btn.addEventListener("click",()=>{
    //On Click,log message to our console
    menu.classList.toggle("hide");
});



// add buttons for windows width > 420 and remove menu
window.addEventListener('resize' , ()=>{
    if(window.innerWidth> 420){
        btn.classList.add('shows');
        menu.classList.remove('hide');
    } else if(window.innerWidth < 420){  // Hide buttons and add menu when windows width < 420
        btn.classList.remove('hide');
        menu.classList.add('hide');


    }
})

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");  //get slides images
    var dots = document.getElementsByClassName("dot");  //get dots that indicate slides change
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";     // dont show images at the beginning
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    // reinitialise slideindex to 1 if slideindex > number of slides
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";    // display slide
    dots[slideIndex-1].className += " active";  // make the current dot active
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }