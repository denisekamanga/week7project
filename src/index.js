function updateweatherinfo(response){

    console.log(response.data);

    let temp = response.data.temperature.current;
    let oldtemp = document.querySelector("#weather-app-temp");
    oldtemp.innerHTML = Math.round(temp);

}

function searchCity(city){
    let apikey = "f21c03107be2b6tbd1077of9aa76543f";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;

    axios.get(url).then(updateweatherinfo);

  
}


function handleSearchSubmit(event){

    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    
    searchCity(searchInput.value)
};

let serchFormElement = document.querySelector("#searchForm");
serchFormElement.addEventListener("submit", handleSearchSubmit);
