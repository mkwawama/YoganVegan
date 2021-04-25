console.log("Loaded");

//Use QuerySelector to select an object frm the DOM(Documnet Object Model)
var btn = document.querySelector(".mobileNavBTN");
var menu= document. querySelector(".menu");

var slideIndex = 0;
showSlides();

//Attach an event listener to the element, that listnes for a click
btn.addEventListener("click",()=>{
    //On Click,log message to our console
    menu.classList.toggle("hide");
});




window.addEventListener('resize' , ()=>{
    if(window.innerWidth> 420){
        btn.classList.add('shows');
        menu.classList.remove('hide');

    } else if(window.innerWidth < 420){
        btn.classList.remove('hide');
        menu.classList.add('hide');


    }
})

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }
