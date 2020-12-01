const apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.04&lon=-111.4&units=imperial&appid=b7011acaa1508a99e056c0882571c332";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forecast);
    let day = 0;
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    
    
    forecast.forEach(x =>{
        const d = new Date(forecast[day].dt_txt);
        const isrc = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
        const desc = forecast[day].weather[0].description;
        
        document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp + '\xB0F';
        document.getElementById(`icon${day+1}`).setAttribute('src', isrc);
        document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
        
        day++;
    })
  });