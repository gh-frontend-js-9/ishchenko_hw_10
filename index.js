let container = document.querySelector('.weather-container');
container.style.display = 'none';

weather.onclick = () => {
    container.style.display = 'block';
    let city = document.querySelector('.input').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4492edc686e7ddbf42d4433844124e8a`)
        .then(response => { return response.json() })
        .then(data => {
            container.innerHTML = ' ';
            let weatherCity = document.createElement('p');
            let weatherCountry = document.createElement('p');
            let weatherIcon = document.createElement('img');
            let weatherDescription = document.createElement('p');
            let flexContainer = document.createElement('div');
            let weatherTemp = document.createElement('p');
            let weatherWind = document.createElement('p');

            weatherCity.setAttribute('class','city-block');
            weatherCountry.setAttribute('class', 'country-block');
            weatherIcon.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`);
            flexContainer.setAttribute('class', 'flex');

            weatherCity.innerHTML = data.name;
            weatherCountry.innerHTML = data.sys.country;
            weatherDescription.innerHTML = data.weather[0]['description'];
            weatherTemp.innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            weatherWind.innerHTML = data.wind.speed + ' m/s';

            container.appendChild(weatherCity);
            container.appendChild(weatherCountry);
            container.appendChild(weatherIcon);
            container.appendChild(weatherDescription);
            container.appendChild(flexContainer);
            flexContainer.appendChild(weatherTemp);
            flexContainer.appendChild(weatherWind);
        })
        .catch(() => {
            container.innerHTML = "No such city(("
        });
}