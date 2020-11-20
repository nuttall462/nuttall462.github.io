const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b7011acaa1508a99e056c0882571c332";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currTemp = document.querySelector('#current-temp');
    const iconsrc = document.querySelector('#imagesrc');
    const weathericon = document.querySelector('#icon');

    currTemp.innerHTML = jsObject.main.temp;
    
    
    const isrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

    weathericon.setAttribute('src', isrc);
    weathericon.setAttribute('alt', jsObject.weather[0].description);
  });