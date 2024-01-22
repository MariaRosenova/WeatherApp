const searchSide = document.getElementsByClassName("search-bar")[0];

window.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        searchSide.style.opacity = 1 - this.window.scrollY / window.innerHeight;
        searchSide.style.backgroundColor = "black";
       
    });
   
});

const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener('click', () => {
    //const input = document.querySelector("#input-bar").value;
   
    const apiKey = "cbb16815a867f2287841ffe07679f415";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=sofia";

    async function checkWeather() {
        const response = await fetch(apiUrl + `&apiKey=${apiKey}`);
        var data = await response.json();
        console.log(data);
    }

    checkWeather();
});

