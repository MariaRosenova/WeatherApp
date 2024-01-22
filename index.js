let flag = false;
const searchSide = document.getElementsByClassName("search-bar")[0];

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    searchSide.style.opacity = 1 - this.window.scrollY / window.innerHeight;
    searchSide.style.backgroundColor = "black";
  });
});

const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", () => {
  const searchCity = document.querySelector("#input-bar").value;

  const apiKey = "cbb16815a867f2287841ffe07679f415";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

  async function checkWeather() {
    const response = await fetch(
      apiUrl + `&apiKey=${apiKey}` + `&q=${searchCity}`
    );
    var data = await response.json();
    flag = true;
    console.log(data);
  }

  if (!flag) {
    alert("Error! Please, type correct information!");
  }
  scrollResultsIntoView();

  checkWeather();
});

function scrollResultsIntoView() {
  const results = document.querySelector("main");
  results.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
