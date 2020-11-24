var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

var fishhaven = document.querySelector('.fish');
var fishhavenimg = document.querySelector('.fishimg');
var preston = document.querySelector('.preston');
var prestonimg = document.querySelector('.prestonimg');
var sodasprings = document.querySelector('.soda');
var sodaimg = document.querySelector('.sodaimg');


request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    townPreston(townData);
    townFishHaven(townData);
    townSodaSprings(townData);
}

function townFishHaven(jsonObj) {
    var towns = jsonObj['towns'];

    var townName = document.createElement('h2');
    townName.textContent = towns[1].name;
    fishhaven.appendChild(townName);

    var townMotto = document.createElement('h4');
    townMotto.textContent = towns[1].motto;
    fishhaven.appendChild(townMotto);

    var townFound = document.createElement('p');
    townFound.textContent = 'Founded: ' + towns[1].yearFounded;
    fishhaven.appendChild(townFound);

    var townPop = document.createElement('p');
    townPop.textContent = 'Population: ' + towns[1].currentPopulation;
    fishhaven.appendChild(townPop);

    var townRain = document.createElement('p');
    townRain.textContent = 'Average Precipitation: ' + towns[1].averageRainfall;
    fishhaven.appendChild(townRain);

    var townEvents = document.createElement('p');
    townEvents.textContent = 'Events: ' + towns[1].events;
    townEvents.setAttribute('class', "townEvents");
    fishhaven.appendChild(townEvents);

    let image = document.createElement('img');
    image.setAttribute('src', "/lesson9/images/fish-haven.jpg");
    image.setAttribute('alt', townName.textContent);
    fishhavenimg.appendChild(image);
}

function townPreston(jsonObj) {
    var towns = jsonObj['towns']
   
    var townName = document.createElement('h2');
    townName.textContent = towns[5].name;
    preston.appendChild(townName);

    var townMotto = document.createElement('h4');
    townMotto.textContent = towns[4].motto;
    preston.appendChild(townMotto);

    var townFound = document.createElement('p');
    townFound.textContent = 'Founded: ' + towns[5].yearFounded;
    preston.appendChild(townFound);

    var townPop = document.createElement('p');
    townPop.textContent = 'Population: ' + towns[5].currentPopulation;
    preston.appendChild(townPop);

    var townRain = document.createElement('p');
    townRain.textContent = 'Average Precipitation: ' + towns[5].averageRainfall;
    preston.appendChild(townRain);

    var townEvents = document.createElement('p');
    townEvents.textContent = 'Events: ' + towns[5].events;
    townEvents.setAttribute('class', "townEvents");
    preston.appendChild(townEvents);

    let image = document.createElement('img');
    image.setAttribute('src', "/lesson9/images/preston.jpg");
    image.setAttribute('alt', townName.textContent);
    prestonimg.appendChild(image);
    
}


function townSodaSprings(jsonObj) {
    var towns = jsonObj['towns'];

    var townName = document.createElement('h2');
    townName.textContent = towns[6].name;
    sodasprings.appendChild(townName);
   

    var townMotto = document.createElement('h4');
    townMotto.textContent = towns[6].motto;
    sodasprings.appendChild(townMotto);
   

    var townFound = document.createElement('p');
    townFound.textContent = 'Founded: ' + towns[6].yearFounded;
    sodasprings.appendChild(townFound);
   

    var townPop = document.createElement('p');
    townPop.textContent = 'Population: ' + towns[6].currentPopulation;
    sodasprings.appendChild(townPop);

    var townRain = document.createElement('p');
    townRain.textContent = 'Average Precipitation: ' + towns[6].averageRainfall;
    sodasprings.appendChild(townRain);

    var townEvents = document.createElement('p');
    townEvents.textContent = 'Events: ' + towns[6].events;
    townEvents.setAttribute('class', "townEvents");
    sodasprings.appendChild(townEvents);

    let image = document.createElement('img');
    image.setAttribute('src', "/lesson9/images/sodasprings.jpg");
    image.setAttribute('alt', townName.textContent);
    sodaimg.appendChild(image);
      
}

