function handleSearchSubmit(event){

    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let city = document.querySelector("#weather-app-city");
    city.innerHTML = searchInput.value;
};

let serchFormElement = document.querySelector("#searchForm");
serchFormElement.addEventListener("submit", handleSearchSubmit);
