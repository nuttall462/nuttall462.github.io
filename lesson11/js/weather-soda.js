const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=b7011acaa1508a99e056c0882571c332";

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const humidity = document.querySelector('#humidity');
    const current = document.querySelector('#currently');

    const temp = document.getElementById('current-temp').textContent = jsObject.main.temp;
    const speed = document.getElementById('windspeed').textContent = jsObject.wind.speed;
    
    current.innerHTML = jsObject.weather[0].main;
    humidity.innerHTML = jsObject.main.humidity;

    if ( temp <= 50.0 && speed >= 3.0) {
        let chillFactor = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * temp * Math.pow(speed,0.16));
        document.querySelector("#chill").innerHTML = Math.ceil(chillFactor);
}
    else {
        document.querySelector("#chill").innerHTML = "N/A"
}
  });