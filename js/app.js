// Do no show API key on your js files.
const apiKey = '4e7a1e14b81adf0c34808967884eba5a'


const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));

}

const displayTemperature = data => {

    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);

}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city;


    loadTemperature(city);

})



loadTemperature('dhaka');