// const searchSide = document.getElementsByClassName("search-bar")[0];

// window.addEventListener("scroll", function() {

//     var scrollX = window.scrollX;
//     var scrollY = window.scrollY;

//     console.log(`Y= ${scrollY}`)
//     //750
  
//     let currentWidth = 100 - scrollY / 100 * 11;
//     console.log(currentWidth)
//     searchSide.style.width = `${currentWidth}%`;
//     searchSide.style.opacity = currentWidth / 100;

// });

const searchSide = document.getElementsByClassName("search-bar")[0];

window.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        searchSide.style.opacity = 1 - this.window.scrollY / window.innerHeight;
        searchSide.style.backgroundColor = "black";
       
    });
   
});