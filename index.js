const searchSide = document.getElementsByClassName("search-bar")[0];

window.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        searchSide.style.opacity = 1 - this.window.scrollY / window.innerHeight;
        searchSide.style.backgroundColor = "black";
       
    });
   
});