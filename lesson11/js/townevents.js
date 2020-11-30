var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


var fishEvents = document.querySelector('.fEvents');
var sodaEvents = document.querySelector('.sEvents');
var prestonEvents = document.querySelector('.pEvents');

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    townPreston(townData);
    townFishHaven(townData);
    townSodaSprings(townData);
}
    
function townPreston(jsonObj){
    var towns = jsonObj['towns'];
    const filtered = towns.filter(town => (town.name == "Preston"));
    
    let eventList = document.createElement('ul');

    for (let i = 0; i < filtered[0].events.length; i++) {
        let event = document.createElement('li');

        event.textContent = filtered[0].events[i];
        eventList.appendChild(event);
      }
    prestonEvents.appendChild(eventList);
}
function townFishHaven(jsonObj){
    var towns = jsonObj['towns'];
    const filtered = towns.filter(town => (town.name == "Fish Haven"));
    
    let eventList = document.createElement('ul');

    for (let i = 0; i < filtered[0].events.length; i++) {
        let event = document.createElement('li');

        event.textContent = filtered[0].events[i];
        eventList.appendChild(event);
      }
    fishEvents.appendChild(eventList);
}
function townSodaSprings(jsonObj){
    var towns = jsonObj['towns'];
    const filtered = towns.filter(town => (town.name == "Soda Springs"));
    
    let eventList = document.createElement('ul');

    for (let i = 0; i < filtered[0].events.length; i++) {
        let event = document.createElement('li');

        event.textContent = filtered[0].events[i];
        eventList.appendChild(event);
      }
    sodaEvents.appendChild(eventList);
}