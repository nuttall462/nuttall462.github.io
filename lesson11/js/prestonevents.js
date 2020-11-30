const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const towns = jsObject['towns'];
        var eventList = document.createElement('ul');
        var townEvents = document.querySelector('.pEvents');
        if (towns[5].name == "Preston"){
          for (let i = 0; i < towns[5].events.length; i++) {
            var event = document.createElement('li');
            event.textContent = towns[5].events[i];
            eventList.appendChild(event);
          }
        }
        townEvents.appendChild(eventList);
        
    });