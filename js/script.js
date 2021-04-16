console.log("Loaded");

//Use QuerySelector to select an object frm the DOM(Documnet Object Model)
var btn = document.querySelector(".mobileNavBTN");
var menu= document. querySelector(".menu");

//Attach an event listener to the element, that listnes for a click
btn.addEventListener("click",()=>{
    //On Click,log message to our console
    menu.classList.toggle("hide");
});




window.addEventListener('resize' , ()=>{
    if(window.innerWidth> 420){
        btn.classList.add('hide');
        menu.classList.remove('hide');

    } else if(window.innerWidth < 420){
        btn.classList.remove('hide');
        menu.classList.add('hide');


    }
})
