function updateweatherinfo(response){

    console.log(response.data);

    let city = response.data.city;
    let temp = response.data.temperature.current;
    let humidity = response.data.temperature.humidity;
    let wind = response.data.wind.speed;
    let weatherdescription = response.data.condition.description;
    let oldtemp = document.querySelector("#weather-app-temp");
    oldtemp.innerHTML = Math.round(temp);
    let oldhumidity =document.querySelector("#Humidity");
    oldhumidity.innerHTML = humidity +"%";
    let oldwind = document.querySelector("#windspeed");
    oldwind.innerHTML = wind + " km/h";

    let oldCity = document.querySelector("#weather-app-city");
    oldCity.innerHTML = city;

    let olddescription = document.querySelector("#description");
    olddescription.innerHTML = response.data.condition.description;

    let oldtime = document.querySelector("#time");
    let date = new Date(response.data.time *1000);

    oldtime.innerHTML = formateDate(date);

    let oldicon = document.querySelector("#icon");
    oldicon.innerHTML = `<img src="${response.data.condition.icon_url}">`


}

function formateDate(date){
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[date.getDay()];

    if (minutes < 10){

       minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`
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
