const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.4230&lon=-86.9223&units=imperial&exclude=hourly,daily&appid=b7011acaa1508a99e056c0882571c332";

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const humidity = document.querySelector('#humidity');
    const current = document.querySelector('#currently');
    const temp = document.querySelector('#current-temp');
    
    temp.innerHTML = jsObject.current.temp;
    current.innerHTML = jsObject.current.weather[0].description;
    humidity.innerHTML = jsObject.current.humidity;

  });